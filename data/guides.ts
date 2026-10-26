export type GuideSection = {
  title: string;
  paragraphs: string[];
  checklist?: string[];
  table?: { caption: string; headers: string[]; rows: string[][] };
  links?: { label: string; href: string }[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: GuideSection[];
  source?: { label: string; url: string };
};

export const guides: Guide[] = [
  {
    slug: "motorcycle-mot-history",
    updatedAt: "2026-10-26",
    title: "How to check a motorcycle’s MOT history",
    description: "Where to find official MOT results, how to read the record and why MOT history and service history tell you different things.",
    sections: [
      { title: "Start with the official MOT record", paragraphs: ["If you want to check a motorcycle before buying it, or revisit the history of a bike you already own, start with its registration number. The GOV.UK MOT history service shows recorded test results and mileage, along with the next MOT due date where available.", "For motorcycles tested in England, Scotland or Wales, the service covers tests from 2005. Northern Ireland records are available from 2017. Older tests and work carried out between tests may not appear, so a short online record does not tell the whole story."] },
      { title: "Read the history as a timeline", paragraphs: ["Begin with the latest test, then work back through the earlier entries. Note the date, recorded mileage and result for each test. Read the recorded defects and advisories rather than looking only at whether the motorcycle passed.", "Make a separate list of questions. Does an advisory appear again later? Is there an invoice showing what was done after a failed test? If mileage entries look unusual, ask for supporting records instead of assuming you know the cause. An MOT entry alone does not explain every gap or change."] },
      { title: "MOT history is not service history", paragraphs: ["The MOT record describes tests. A maintenance record describes work: oil changes, replacement parts, inspections and workshop visits. A motorcycle can have MOT records without a complete record of servicing, and maintenance can take place without generating a new MOT entry.", "Compare the official record with receipts, service-book entries and the owner’s notes. Keep the source of each item clear. A note saying work was planned is different from a receipt or an entry confirming it was completed."] },
      {
        title: "MOT history and service history compared",
        paragraphs: ["Use the two records together. Neither fills gaps in the other automatically, and a planned job is not evidence that work was completed."],
        table: {
          caption: "What each motorcycle record can tell you",
          headers: ["Record", "What it records", "What it does not establish"],
          rows: [
            ["Official MOT history", "Recorded test results, test mileage and available defects or advisories.", "A complete maintenance record or the bike’s condition today."],
            ["Service history", "Recorded servicing and repairs, with dates, mileage and supporting paperwork where available.", "That every entry is independently verified or every job has been recorded."],
            ["Service plan", "Work and questions you want to discuss with a garage.", "Completed maintenance, an agreed price or a confirmed booking."],
          ],
        },
        links: [{ label: "Keep a motorcycle service history alongside the MOT record", href: "/guides/motorcycle-service-history" }],
      },
      {
        title: "Questions to take to the garage",
        paragraphs: ["Keep the wording of each advisory with its date and mileage. Ask what the garage can establish from the record and what needs a current inspection."],
        checklist: [
          "Which advisory or defect am I asking about, and when was it recorded?",
          "Is there an invoice or service entry showing what happened afterwards?",
          "Are any dates or mileage readings unclear, and what evidence could help explain them?",
          "What should the garage assess now before recommending work?",
          "Which work and charges will need my approval before the garage proceeds?",
        ],
        links: [{ label: "Turn these questions into a motorcycle service plan", href: "/guides/motorcycle-service-plan" }],
      },
      { title: "Turn questions into a service conversation", paragraphs: ["Before speaking to a garage, write down the entries you want to discuss, any work you can document and anything you are unsure about. Share the dates and mileage with the garage so the discussion is specific to your motorcycle. An online history is not a substitute for assessing the bike’s current condition.", "2Shocks is available on Google Play to keep available MOT history, your maintenance entries and saved service plans in one motorcycle record. The app labels official information separately from rider-added records. Coverage varies by motorcycle. This website does not perform registration lookups; use the official service linked below to check a record today."] },
    ],
    source: { label: "Check MOT history on GOV.UK", url: "https://www.gov.uk/check-mot-history" },
  },
  {
    slug: "motorcycle-service-history",
    updatedAt: "2026-10-26",
    title: "How to keep a motorcycle service history",
    description: "Keep a useful motorcycle service history with a blank maintenance log, a worked example and a clear way to separate completed work from future plans.",
    sections: [
      {
        title: "Start with completed work, not just MOT tests",
        paragraphs: ["A motorcycle service history records maintenance and repairs. Official MOT results describe tests. Keep both, label their sources and leave gaps visible rather than guessing what happened between tests."],
        links: [{ label: "Check available motorcycle MOT history and understand the difference", href: "/guides/motorcycle-mot-history" }],
      },
      { title: "Give each motorcycle its own record", paragraphs: ["A useful service history lets you return to a simple question: what happened to this bike, and when? Start with the registration and the model details you have confirmed. If you keep more than one motorcycle, maintain separate records so parts, dates and notes stay with the right bike.", "Gather the material you already have: service-book entries, workshop invoices, parts receipts and your own notes. Do not fill gaps with guesses. If you know a job happened but cannot confirm its date or mileage, say that in the record."] },
      { title: "What to record after completed work", paragraphs: ["For each entry, write down the completion date, odometer reading and unit, work performed and who carried it out. Add the part reference or specification shown on the paperwork when relevant. Keep the invoice or receipt somewhere you can retrieve it and record its reference.", "Be precise about what the evidence shows. A receipt for a part demonstrates a purchase; it does not by itself confirm installation. Distinguish work completed by a garage, work you completed yourself and information supplied by a previous owner."] },
      {
        title: "Blank motorcycle maintenance log",
        paragraphs: ["Copy this table into a notebook or spreadsheet, or print the page using your browser. Keep one log per motorcycle. Record the odometer unit and describe only work you know was completed. Keep invoices separately and use their references to find them again."],
        table: {
          caption: "Blank service log — one row per completed job",
          headers: ["Date", "Odometer & unit", "Completed work", "Who did it", "Evidence reference", "Follow-up question"],
          rows: Array.from({ length: 4 }, () => ["", "", "", "", "", ""]),
        },
      },
      {
        title: "Completed work, evidence and future tasks",
        paragraphs: ["This is an illustrative example, not a record from a real rider. A follow-up question stays open until you have an answer; do not mark it as completed maintenance."],
        table: {
          caption: "Worked example: what belongs in each part of the record",
          headers: ["Part of the record", "Example", "How to use it"],
          rows: [
            ["Completed work", "8 September 2026 · 18,420 miles · oil and filter change completed by the workshop.", "Record the date, odometer reading, work and who carried it out."],
            ["Supporting evidence", "Invoice SERVICE-014; oil and filter details retained on the invoice.", "Keep the original paperwork. A parts receipt alone does not establish installation."],
            ["Future task", "Ask the workshop about the chain adjustment noted during the visit.", "Keep this in a service plan until the work or assessment is confirmed."],
          ],
        },
        links: [{ label: "Prepare a motorcycle service plan for work still to discuss", href: "/guides/motorcycle-service-plan" }],
      },
      { title: "Keep future work in a separate plan", paragraphs: ["A list of work you are considering should remain separate from completed maintenance. Note symptoms or questions in your own words, add relevant previous work and bring the plan to your garage. Once work is completed, record what actually happened instead of simply copying the original plan.", "Use the manufacturer’s information for your exact motorcycle and the advice of a qualified workshop when deciding what is due. Service intervals, specifications and procedures vary by model and use. A general record-keeping guide cannot set the maintenance schedule for your bike."] },
      { title: "Where 2Shocks fits", paragraphs: ["2Shocks is a motorcycle maintenance app for UK riders, available on Google Play. iOS is coming soon. It keeps your maintenance entries, available MOT information and saved service plans together. Free includes service-history records, service plans and garage sheets for one active motorcycle. You can remove it and save another bike without upgrading. Automatic bike alerts are included in Free. Plus adds up to 20 active motorcycles, custom reminders and an ad-free experience.", "Garage booking and parts purchasing are not included in the first release. With Free, prepare and save a garage sheet with requested work, notes and suggested parts, choose a garage through Google Maps and open its listing to find its email address. Review and send the prepared enquiry in your email app. The garage confirms availability, work, parts and price directly; nothing is sent automatically and an enquiry is not a confirmed booking. Suggested parts need exact fitment confirmation. A notebook or spreadsheet using the fields above is also a useful place to start."] },
    ],
  },
  {
    slug: "motorcycle-service-plan",
    updatedAt: "2026-10-26",
    title: "How to prepare a motorcycle service plan",
    description: "Organise work, symptoms, previous maintenance and parts questions before contacting a garage. Includes an illustrative motorcycle garage sheet.",
    sections: [
      {
        title: "Write down what you want to discuss",
        paragraphs: ["A motorcycle service plan is a list of intended work and questions, kept separate from your completed service history. Start with your confirmed bike details, current mileage and what you want the garage to assess. You do not need to diagnose a fault or choose all the parts before making an enquiry.", "Here, a service plan means preparing a visit. It is not a prepaid servicing contract, a manufacturer’s maintenance schedule, a quote or a booking. Use the manufacturer’s information for your exact motorcycle and agree the work with the garage."],
      },
      {
        title: "Gather your motorcycle details and previous work",
        paragraphs: ["Note the registration, confirmed make, model, variant and model year where known. Registration year is not always the model year. Add the odometer reading and whether it is in miles or kilometres. Mention modifications that may affect the work or part choice.", "Bring relevant service entries and paperwork references. Say when you do not know a date, specification or previous repair. A clear unknown is more useful than a confident guess."],
        links: [{ label: "Use the service-history log to organise completed work", href: "/guides/motorcycle-service-history" }],
      },
      {
        title: "Describe symptoms and questions in your own words",
        paragraphs: ["Describe what you noticed, when it started and when it happens. Keep your observation separate from a suspected cause. For example, a question about chain adjustment is different from instructing a garage to replace a particular component.", "If an MOT advisory prompted the enquiry, include the actual wording and test date. An older advisory is context for a discussion, not a diagnosis of the motorcycle’s current condition."],
        checklist: ["What have I noticed or what work am I considering?", "When does it happen, and has anything changed recently?", "Which previous work or MOT entry is relevant?", "What do I need the garage to assess or explain before I approve work?"],
        links: [{ label: "Read MOT history and prepare questions about advisories", href: "/guides/motorcycle-mot-history" }],
      },
      {
        title: "An illustrative garage sheet",
        paragraphs: ["This example shows how to organise a conversation. It is not a recommended service schedule or evidence of a real request. Replace the example with your own information and share only what the garage needs."],
        table: {
          caption: "Example only — no work requested, priced or booked",
          headers: ["Item", "Example note for the garage"],
          rows: [
            ["Motorcycle", "My confirmed make, model, variant and model year; registration shared with my selected garage."],
            ["Current mileage", "18,420 miles; rider reading on 26 October 2026."],
            ["Work to discuss", "An oil service; please confirm what is due for this motorcycle."],
            ["Observation or question", "Please assess chain adjustment and explain any work you recommend."],
            ["Previous maintenance", "Oil and filter change recorded on invoice SERVICE-014; original paperwork available."],
            ["Parts questions", "Please confirm the oil specification, quantity and exact filter fitment before ordering."],
            ["Price and approval", "Please explain parts, labour and other charges, and agree the scope with me before proceeding."],
          ],
        },
      },
      {
        title: "Check parts and prices before agreeing the job",
        paragraphs: ["You can prepare a useful plan without a parts shortlist. If you have one, keep source details and compatibility questions with it. Model variants and modifications can matter; confirm exact fitment and oil requirements with the supplier, manufacturer or garage before buying or use.", "An estimated retail parts cost is a materials starting point. It excludes labour and other charges and is not a garage quote. Ask what the garage’s price includes, which parts it will supply and how additional work will be approved."],
      },
      {
        title: "Review the enquiry, then agree the visit directly",
        paragraphs: ["Choose the garage, check the recipient and review the information you are sharing. Ask about availability, the proposed scope and the price. Sending an enquiry does not establish that it arrived, that the garage accepted the job or that a visit is booked.", "After the work, record what was actually completed with the date, mileage and evidence. Leave declined, deferred or unanswered items in the plan rather than copying them into your completed history."],
      },
      {
        title: "Keep your service plan in 2Shocks Free",
        paragraphs: ["2Shocks Free includes service plans and garage sheets for one active motorcycle, alongside private service history, available MOT records, mileage and automatic bike alerts. An account and internet connection are required. You can remove your active motorcycle and add another without upgrading.", "Prepare and save a garage sheet, find nearby garages and review an email enquiry before sending it from your own email app. Agree availability, work, parts and price directly with the garage. Parts suggestions are guidance, and coverage varies by motorcycle.", "2Shocks is available on Google Play; iOS is coming soon. Plus adds up to 20 active motorcycles, custom reminders and an ad-free experience. A notebook using the structure above is also a useful way to prepare."],
      },
    ],
  },
];
