// let activeProgram = $state({});
let activeConsult = $state({});
const allConsults = $state([
    {
        id: 'hs-consulting',
        title: 'Health and Safety Advise Consulting',
        description: [
            "ZagSafe provides tailored health and safety advice to support businesses in meeting their obligations under the Health and Safety at Work Act 2015 and related regulations.",
            "This service is flexible and can be shaped to meet the unique needs of each business, whether it’s developing systems from scratch, reviewing current practices, or advising on specific challenges.",
            "Consulting includes risk assessments, health and safety planning, policy development, and compliance support.",
            "The goal is to deliver practical, workable solutions that fit the culture and capacity of the organisation, not just generic recommendations."
        ]
    },
    {
        id: 'incident-inv',
        title: 'Incident Investigation',
        description: [
            "ZagSafe specialises in professional incident investigations that identify the underlying causes of accidents, near misses, and safety failures.",
            "Using proven methods such as the Incident Cause Analysis Method (ICAM) and other root cause analysis tools, investigations go beyond the surface to uncover contributing systemic issues, organisational influences, and human factors.",
            "Each investigation results in clear findings and actionable recommendations designed to prevent recurrence, improve systems, and strengthen safety outcomes."
        ]
    },
    {
        id: 'height-safety',
        title: 'Height Safety Equipment Inspection',
        description: [
            "ZagSafe conducts certified inspections of fall protection equipment, including harnesses, lanyards, connectors, and other working-at-height systems.",
            "Regular inspection and certification of equipment are critical to ensuring compliance with New Zealand safety regulations and manufacturer standards.",
            "These inspections provide assurance that equipment is fit for use, reducing the risk of equipment failure and potential injury.",
            "This service ensures workers can approach height work with confidence, knowing their equipment has been thoroughly checked and approved."
        ]
    },
    {
        id: 'workplace-audit',
        title: 'Workplace Audit',
        description: [
            "ZagSafe delivers independent, comprehensive workplace audits that provide a clear and honest assessment of current health and safety performance.",
            "Each audit examines key areas such as compliance with legislation, hazard management, worker engagement, training effectiveness, and the overall safety culture of the business.",
            "Workplace audits are not just about identifying issues but also about providing a roadmap for continuous improvement.",
            "By engaging ZagSafe, organisations gain fresh insights into their safety systems and a clear pathway to achieving higher standards of safety and wellbeing."
        ]
    },
    {
        id: 'system-dev',
        title: 'Safety Management System Development',
        description: [
            "ZagSafe develops customised safety management systems (SMS) that align with New Zealand’s Health and Safety at Work Act 2015 and international frameworks such as ISO 45001.",
            "Each system is tailored to the specific size, industry, and risk profile of the organisation and includes policies, procedures, risk registers, emergency plans, and monitoring processes that are both compliant and practical to implement.",
            "A well-designed SMS not only improves compliance but also builds trust with workers, contractors, and clients by showing that health and safety is a core part of how the business operates."
        ]
    }
]);

export const createConsultData = () => {
    return {
        get list () { return allConsults },

        /**
         * @param {{}} value
         */
        set activeConsult (value) {
            activeConsult = value;
            // @ts-ignore
            // activeProgram = allConsults.find(d => d.courses.map(s => s.id).indexOf(activeCourse.id) >= 0);
        },

        // @ts-ignore
        getConsultById (id) {
            if (!id) { return null; }
            // @ts-ignore
            let crs = this.list.find(s => s.id === id);
            console.log(`getCourseById id = ${id}`, crs);
            return crs;
        },
    };
};