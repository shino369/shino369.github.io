import { TranslationModel } from "@/types";
import { image } from "motion/react-client";

export const SKILLSET = {
  frontend: {
    javascript: [
      "JavaScript",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    ],
    typescript: [
      "TypeScript",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    ],
    react: [
      "React",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    ],
    next: [
      "Next.js",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    redux: [
      "Redux",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    ],
    recoil: ["Recoil"],
    angular: [
      "Angular",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    ],
    rxjs: [
      "RxJS",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg",
    ],
    reactQuery: [
      "Tanstack Query",
      "https://tanstack.com/_build/assets/logo-color-100w-br5_Ikqp.png",
    ],
    i18next: ["i18-next"],
    jest: [
      "Jest",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    ],
    playwright: [
      "Playwright",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
    ],
    vitest: [
      "Vitest",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
    ],
    vue: [
      "Vue.js",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    ],
    vite: [
      "Vite",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    ],
    pinia: ["Pinia", "https://pinia.vuejs.org/logo.svg"],
    jQuery: [
      "jQuery",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
    ],
    tailwindcss: [
      "TailwindCSS",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    materialUi: [
      "Material-UI",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-plain.svg",
    ],
    bootstrap: [
      "Bootstrap",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    ],
  },
  mobile: {
    dart: [
      "Dart",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    ],
    flutter: [
      "Flutter",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    ],
    riverpod: ["Riverpod", "https://riverpod.dev/ja/img/logo.png"],
    reactNative: [
      "React Native",
      "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    ],
    kotlin: [
      "Kotlin",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
    ],
  },
  backend: {
    node: [
      "Node.js",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    ],
    java: [
      "Java",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    ],
    springboot: [
      "Spring Boot",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    ],
    myBatis: [
      "MyBatis",
      "https://raw.githubusercontent.com/mybatis/logo/32295ff550d29ca6e8b22c8a325e22c617791bf9/logo-bird-ninja.svg",
    ],
    postgreSQL: [
      "PostgreSQL",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    ],
    php: [
      "PHP",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    ],
    cakephp: [
      "CakePHP",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cakephp/cakephp-original.svg",
    ],
    mySQL: [
      "MySQL",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    ],
    python: [
      "Python",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    ],
    sqlmap: ["sqlmap"],
    fastapi: [
      "FastAPI",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    ],
  },
  devops: {
    docker: [
      "Docker",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
    ],
    github: [
      "GitHub",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    ],
    githubActions: [
      "GitHub Actions",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
    ],
    azureDevOps: [
      "Azure DevOps",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
    ],
    gitlab: [
      "GitLab",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg",
    ],
    bitbucket: [
      "Bitbucket",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg",
    ],
    firebase: [
      "Firebase",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    ],
    figma: [
      "Figma",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    ],
    jira: [
      "Jira",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    ],
    git: [
      "Git",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    ],
    svn: [
      "SVN",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/subversion/subversion-original.svg",
    ],
  },
};

export const REVERSED_SKILL_MAP = Object.entries(SKILLSET).reduce<
  Record<string, string>
>((acc, [key, value]) => {
  Object.entries(value).forEach(([k, v]) => {
    acc[v[0]] = key;
  });
  return acc;
}, {});

export const SKILLSET_ARR = Object.values(SKILLSET).reduce<string[][]>(
  (acc, cur) => [...acc, ...Object.values(cur)],
  []
);

export const SERVICES = [
  { name: "spa", img: "/service-1.jpg" },
  { name: "staticsite", img: "/service-2.jpg" },
  { name: "mobileapp", img: "/service-3.jpg" },
  { name: "api", img: "/service-4.jpg" },
];

export const RESUME = [
  {
    title: "job",
    role: "software_engineer",
    company_name: "LiNKX, inc.",
    image:
      "https://storage.googleapis.com/studio-design-asset-files/projects/xNWYPwGval/s-293x67_webp_f85bb8e5-1be5-4db0-9b01-a12ab3e6b5a7.webp",
    url: "https://www.linkx.dev/",
    employment_type: "permanent",
    employment_period: "2023-2 ～ now",
    company_description: `linkx_description`,
  },
  {
    title: "job",
    role: "programmer",
    company_name: "Shiji Information Technology (Hong Kong) Limited",
    image:
      "https://assets-global.website-files.com/5bbba67586f1ae657749bb91/5bca0d583401003d63b8cd4e_header-logo-new-blue.png",
    url: "https://www.shijigroup.com/",
    employment_type: "permanent",
    employment_period: "2022-8 ～ 2023-8",
    company_description: `shiji_description`,
  },
  {
    title: "job",
    role: "backend_developer",
    company_name: "Appicidea IT Solutions Limited",
    image:
      "https://cdn.prod.website-files.com/634e6ec69e9cd171929502b4/6358eaa7db103e2d18f6bbf8_appic-stacked-logo.svg",
    url: "https://appicidea.com/",
    employment_type: "permanent",
    employment_period: "2021-9 ～ 2022-7",
    company_description: `appicidea_description`,
  },
];

export const WORKS: Record<string, TranslationModel | string[]>[] = [
  {
    title: {
      shouldTranslate: true,
      key: "linkx_sbi",
    },
    description: {
      shouldTranslate: true,
      key: "linkx_sbi_description",
    },
    environemnt: [
      SKILLSET.frontend.typescript[0],
      SKILLSET.frontend.javascript[0],
      SKILLSET.frontend.next[0],
      SKILLSET.frontend.recoil[0],
      SKILLSET.frontend.reactQuery[0],
      SKILLSET.frontend.materialUi[0],
      SKILLSET.frontend.jest[0],
      SKILLSET.devops.git[0],
      SKILLSET.devops.github[0],
      SKILLSET.devops.githubActions[0],
      SKILLSET.devops.jira[0],
    ],
  },
  {
    title: {
      shouldTranslate: true,
      key: "linkx_hokkoku",
    },
    description: {
      shouldTranslate: true,
      key: "linkx_hokkoku_description",
    },
    environemnt: [
      SKILLSET.frontend.javascript[0],
      SKILLSET.mobile.dart[0],
      SKILLSET.mobile.flutter[0],
      SKILLSET.mobile.riverpod[0],
      SKILLSET.mobile.kotlin[0],
      SKILLSET.devops.git[0],
      SKILLSET.devops.azureDevOps[0],
      SKILLSET.devops.figma[0],
      SKILLSET.devops.firebase[0],
    ],
    image: ["https://www.hokkokubank.co.jp/assets/img/logo.svg"],
  },
  {
    title: {
      shouldTranslate: true,
      key: "playwright",
    },
    description: {
      shouldTranslate: true,
      key: "playwright_description",
    },
    environemnt: [
      SKILLSET.frontend.javascript[0],
      SKILLSET.frontend.typescript[0],
      SKILLSET.frontend.playwright[0],
      SKILLSET.backend.node[0],
      SKILLSET.devops.github[0],
      SKILLSET.devops.git[0],
    ],
    url: ["https://github.com/shino369/playwright-ticket-buyer"],
  },
  {
    title: {
      shouldTranslate: false,
      key: "flutter-background-screen-lock",
    },
    description: {
      shouldTranslate: false,
      key: "Show your custom lock screen after coming back from background, or use the lock screen as a route guarding page. Initially designed for high security app like banking app.",
    },
    environemnt: [
      SKILLSET.mobile.dart[0],
      SKILLSET.mobile.flutter[0],
      SKILLSET.devops.github[0],
      SKILLSET.devops.git[0],
    ],
    url: ["https://github.com/shino369/flutter-background-screen-lock"],
  },
  {
    title: {
      shouldTranslate: true,
      key: "hkjccare",
    },
    url: [
      "https://apps.apple.com/us/app/%E7%85%A7%E9%A1%A7%E9%81%94%E4%BA%BA2-0/id1622310761",
      "https://play.google.com/store/apps/details?id=com.appicidea.jcabcmobileapp",
    ],
    description: {
      shouldTranslate: true,
      key: "hkjccare_description",
    },
    environemnt: [
      SKILLSET.mobile.reactNative[0],
      SKILLSET.frontend.javascript[0],
      SKILLSET.frontend.typescript[0],
      SKILLSET.frontend.react[0],
      SKILLSET.frontend.i18next[0],
      SKILLSET.devops.git[0],
      SKILLSET.devops.jira[0],
      SKILLSET.devops.bitbucket[0],
    ],
    image: Array.from(
      { length: 5 },
      (_, i) => `/pics/appicidea/hkjc/${i + 1}.jpg`
    ),
  },
  {
    title: {
      shouldTranslate: true,
      key: "hkc",
    },
    url: ["https://www.thehongkongclub.hk/public/library.html"],
    description: {
      shouldTranslate: true,
      key: "hkc_description",
    },
    environemnt: [
      SKILLSET.frontend.angular[0],
      SKILLSET.frontend.rxjs[0],
      SKILLSET.frontend.javascript[0],
      SKILLSET.frontend.typescript[0],
      SKILLSET.frontend.bootstrap[0],
      SKILLSET.devops.git[0],
      SKILLSET.devops.jira[0],
      SKILLSET.devops.bitbucket[0],
      SKILLSET.devops.docker[0],
    ],
    image: Array.from(
      { length: 12 },
      (_, i) => `/pics/appicidea/hkc/${i + 1}.jpg`
    ),
  },
  {
    title: {
      shouldTranslate: true,
      key: "3tech",
    },
    url: ["https://www.3tech.net/index.php?c=category&id=8"],
    description: {
      shouldTranslate: true,
      key: "3tech_description",
    },
    environemnt: [
      SKILLSET.frontend.angular[0],
      SKILLSET.frontend.typescript[0],
      SKILLSET.frontend.javascript[0],
      SKILLSET.frontend.rxjs[0],
      SKILLSET.backend.java[0],
      SKILLSET.backend.springboot[0],
      SKILLSET.backend.postgreSQL[0],
      SKILLSET.backend.myBatis[0],
      SKILLSET.devops.git[0],
      SKILLSET.devops.gitlab[0],
      SKILLSET.devops.jira[0],
    ],
    image: Array.from(
      { length: 5 },
      (_, i) => `/pics/appicidea/3tech/${i + 1}.jpg`
    ),
  },
  {
    title: {
      shouldTranslate: true,
      key: "tms",
    },
    description: {
      shouldTranslate: true,
      key: "tms_description",
    },
    environemnt: [
      SKILLSET.frontend.typescript[0],
      SKILLSET.frontend.javascript[0],
      SKILLSET.frontend.react[0],
      SKILLSET.frontend.redux[0],
      SKILLSET.frontend.jest[0],
      SKILLSET.frontend.i18next[0],
      SKILLSET.frontend.jQuery[0],
      SKILLSET.frontend.bootstrap[0],
      SKILLSET.backend.php[0],
      SKILLSET.backend.cakephp[0],
      SKILLSET.backend.python[0],
      SKILLSET.backend.sqlmap[0],
      SKILLSET.backend.mySQL[0],
      SKILLSET.devops.git[0],
      SKILLSET.devops.gitlab[0],
      SKILLSET.devops.svn[0],
    ],
    image: Array.from({ length: 8 }, (_, i) => `/pics/shiji/tms/${i + 1}.jpg`),
  },
  {
    title: {
      shouldTranslate: true,
      key: "tms_resv",
    },
    description: {
      shouldTranslate: true,
      key: "tms_resv_description",
    },
    environemnt: [
      SKILLSET.frontend.vue[0],
      SKILLSET.frontend.vite[0],
      SKILLSET.frontend.vitest[0],
      SKILLSET.frontend.pinia[0],
      SKILLSET.frontend.typescript[0],
      SKILLSET.frontend.javascript[0],
      SKILLSET.frontend.jQuery[0],
      SKILLSET.frontend.tailwindcss[0],
      SKILLSET.backend.php[0],
      SKILLSET.backend.cakephp[0],
      SKILLSET.backend.mySQL[0],
      SKILLSET.devops.git[0],
      SKILLSET.devops.gitlab[0],
      SKILLSET.devops.docker[0],
    ],
    image: ["/pics/shiji/tms/1.jpg", "/pics/shiji/resv/1.jpg"],
  },
  {
    title: {
      shouldTranslate: true,
      key: "telegrambot",
    },
    description: {
      shouldTranslate: true,
      key: "telegrambot_description",
    },
    environemnt: [
      SKILLSET.frontend.typescript[0],
      SKILLSET.frontend.javascript[0],
      SKILLSET.backend.node[0],
      SKILLSET.devops.github[0],
      SKILLSET.devops.git[0],
    ],
    url: ["https://github.com/shino369/telegram-bot-typescript-template"],
  },
];
