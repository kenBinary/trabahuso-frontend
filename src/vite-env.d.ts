/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_HELLO: string;
  readonly VITE_JOBS_ENDPOINT: string;
  readonly VITE_JOB_FREQUENCY_LIMIT_ENDPOINT: string;
  readonly VITE_JOB_FREQUENCY_ENDPOINT: string;
  readonly VITE_SALARY_RANGE_ENDPOINT: string;
  readonly VITE_PROG_LANG_ENDPOINT: string;
  readonly VITE_PROG_LANG_LIMIT_ENDPOINT: string;
  readonly VITE_DB_ENDPOINT: string;
  readonly VITE_DB_LIMIT_ENDPOINT: string;
  readonly VITE_FRAME_AND_LIBS_ENDPOINT: string;
  readonly VITE_FRAME_AND_LIBS_LIMIT_ENDPOINT: string;
  readonly VITE_CLOUD_PLAT_ENDPOINT: string;
  readonly VITE_CLOUD_PLAT_LIMIT_ENDPOINT: string;
  readonly VITE_TOOLS_ENDPOINT: string;
  readonly VITE_TOOLS_LIMIT_ENDPOINT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
