import {createAlova} from 'alova';
import VueHook from 'alova/vue';
import GlobalFetch from 'alova/GlobalFetch';

//const baseUrl: string = environments['VITE_APP_BASE_URL'] + environments.VITE_APP_SERVICE_API_VERSION
export const alovaInstance = createAlova({
    baseURL: "https://jsonplaceholder.typicode.com",
    statesHook: VueHook,
    requestAdapter: GlobalFetch(),
    responded: response => response.json()
});