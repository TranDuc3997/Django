import { environment } from "./environments/environment.prod";

export const SERVER_API_URL = environment.production
        ? 'http://127.0.0.1:8000/api'
        : 'http://127.0.0.1:8000/api';
export const IMAGE_URL = '/assets/img/';