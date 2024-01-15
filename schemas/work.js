import { defineField } from "sanity";


const Work = {
    name: "work",
    title: "Work",
    type: "document",
    fields: [
          defineField({
            name: "company",
            title: "Company",
            type: "string",
            validation: (rule) => rule.required(),
          }),
          {
            name: "companyLogo",
            title: "Companylogo",
            type: "image",
            description: "Upload a company logo",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
          defineField({
            name: "job_description",
            title: "Job_description",
            type: "string",
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: "siteurl",
            title: "Siteurl",
            type: "string",
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: "githublink",
            title: "Githublink",
            type: "string",
            validation: (rule) => rule.required(),
          }),
    ]
}

export default Work;