import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Lab Information System',
        description: "LIS (Lab Information System) is a term that has been used to describe structures that help clinical environments and patient-specific specimens in the past and used in laboratories for testing, tracking of patient reports. Data monitoring, instrument interfacing, and workflow efficiency are all supported by LIS systems.",
        tools: ['NestJS', 'PgAdmin', 'AWS SES','PostgreSQL', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer','Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Incident Mapping System',
        description: 'The Incident Mapping System is a security management web application used to track the locations of incidents. This app generates daily reports as well as monthly, weekly, and custom date reports of all incidents. A Feeds module is also included to add news, which is fetched from Google News using web scraping, and to manually add incidents that occur nationally and internationally.Incidents are categorized into national incidents by province and international incidents by continent, such as Asia, America(North & South), Europe, Middle East etc. Additionally, the system sends notifications and silent alarms if any high-priority incident occurs in a predefined region.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    // {
    //     id: 3,
    //     name: 'Health Software System(MEDIT360)',
    //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
    //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
    //     code: '',
    //     role: 'Full Stack Developer',
    //     demo: '',
    //     image: realEstate,
    // },
    {
        id: 4,
        name: 'Potato Disease Classification: Deep learning end to end',
        description: "armers every year face economic loss and crop waste due to various diseases in potato plants. We will use image classification using CNN and build a web application using which a former can take a picture and app will tell you if the plant has a disease or not. Technology stack for this project will be TensorFlow, CNN, Data Augmentation and TF dataset for model building. Tf serving and FastAPI for Backend server and Quantization, TensorFlow lite for Model Optimization and React JS for front end development",
        tools: ['TensorFlow','CNN','React JS', 'Material UI'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },