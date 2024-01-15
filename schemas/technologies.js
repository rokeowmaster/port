import { defineField } from "sanity";


const Technologies = {
    name: "technologies",
    title: "Technologies",
    type: "document",
    fields: [
        defineField({
            name: "technology",
            title: "Technology",
            type: "string",
            validation: (rule) => rule.required(),
          }),
          {
            name: "technologyLogo",
            title: "technology logo",
            type: "image",
            description: "Upload a technology logo",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
    ]
}

export default Technologies;