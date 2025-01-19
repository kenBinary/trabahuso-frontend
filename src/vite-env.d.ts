/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_JOBS_ENDPOINT: string;
  readonly VITE_JOB_LOCATIONS_ENDPOINT: string;
  readonly VITE_JOB_LOCATIONS_MEDIAN_SALARY_ENDPOINT: string;
  readonly VITE_SALARY_DISTRIBUTION_ENDPOINT: string;
  readonly VITE_TECH_STACK_COUNTS_ENDPOINT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
