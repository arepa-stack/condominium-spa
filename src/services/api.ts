import axios from 'axios';

const STORAGE_KEY = 'download_submission_stats';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

interface SubmissionStats {
  attempts: number;
  lastTimestamp: number;
}

const getCooldownTime = (attempts: number): number => {
  if (attempts === 1) return 5 * 60 * 1000; // 5 min
  if (attempts === 2) return 10 * 60 * 1000; // 10 min
  if (attempts >= 3) return 15 * 60 * 1000; // 15 min
  return 0;
};

export const getRemainingCooldown = (): number => {
  const statsJson = localStorage.getItem(STORAGE_KEY);
  if (!statsJson) return 0;

  const stats: SubmissionStats = JSON.parse(statsJson);
  const cooldown = getCooldownTime(stats.attempts);
  const elapsed = Date.now() - stats.lastTimestamp;
  
  return Math.max(0, cooldown - elapsed);
};

const updateSubmissionStats = () => {
  const statsJson = localStorage.getItem(STORAGE_KEY);
  const stats: SubmissionStats = statsJson 
    ? JSON.parse(statsJson) 
    : { attempts: 0, lastTimestamp: 0 };

  stats.attempts += 1;
  stats.lastTimestamp = Date.now();
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
};

export interface DownloadFormData {
  fullName: string;
  contact: string;
  email: string;
  buildingName: string;
  location: string;
  estimatedUsers: string;
}

export const submitDownloadRequest = async (data: DownloadFormData) => {
  const remaining = getRemainingCooldown();
  if (remaining > 0) {
    throw new Error(`Debes esperar ${Math.ceil(remaining / 60000)} minutos antes de enviar otra solicitud.`);
  }

  const API_ENDPOINT = `${API_BASE_URL}/api/register-download`; 

  try {
    const response = await axios.post(API_ENDPOINT, data);
    
    if (response.status === 201 || response.status === 200) {
      updateSubmissionStats();
      return { success: true, message: 'Información registrada correctamente.' };
    }
    
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        throw new Error(error.response.data.message || 'Datos inválidos. Por favor revisa el formulario.');
      }
      if (error.response?.status === 500) {
        throw new Error('Error en el servidor. Por favor intenta más tarde.');
      }
    }
    throw new Error('No se pudo conectar con el servidor. Verifica tu conexión.');
  }
};
