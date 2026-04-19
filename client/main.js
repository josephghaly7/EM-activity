import './style.css'

// Curriculum data — all 65 days organized by week
const curriculum = [
  // ============ PHASE 1: FOUNDATION ============
  {
    phase: 1, phaseName: "Foundation", subtitle: "Must-know before you touch a patient",
    week: 1, weekName: "Resuscitation & ABCs",
    days: [
      { day: 1, topic: "Airway anatomy & decision (How to intubate / surgical airway)", resource: "ALiEM EM in 5", url: "https://www.youtube.com/watch?v=REc2K-TO0e0", duration: "15 min" },
      { day: 1, topic: "RSI pharmacology & induction agents", resource: "EM Core + ALiEM", url: "https://www.youtube.com/watch?v=LY1R4lxR4Xg", duration: "15 min" },
      { day: 1, topic: "Failed airway algorithms", resource: "ACEP EM Core", url: "https://www.youtube.com/watch?v=WA4v7GTPUD8", duration: "20 min" },
      { day: 2, topic: "Shock classification & initial approach", resource: "ALiEM", url: "https://www.youtube.com/watch?v=K_c2KzQV7b0", duration: "15 min" },
      { day: 2, topic: "Vasopressors in shock", resource: "EM Cases", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 2, topic: "Broselow tape / pediatric emergency basics", resource: "EMLTW micro", url: "https://www.youtube.com/watch?v=EK_VYQmkSVM", duration: "15 min" },
      { day: 3, topic: "Primary survey — trauma", resource: "ATLS summary (YouTube)", url: "https://www.youtube.com/watch?v=YhR9s_8FyTU", duration: "20 min" },
      { day: 3, topic: "Secondary survey", resource: "ATLS summary", url: "https://www.youtube.com/watch?v=g24SSvP3Dow", duration: "15 min" },
      { day: 3, topic: "Hemorrhage control & TXA", resource: "ALiEM", url: "https://www.youtube.com/watch?v=g6FL-uckK4Y", duration: "15 min" },
      { day: 4, topic: "Advanced cardiac life support (ACLS)", resource: "AHA ACLS videos (free)", url: "https://www.youtube.com/watch?v=YD-B2CcX_3U", duration: "30 min" },
      { day: 5, topic: "Post-cardiac arrest care", resource: "ALiEM", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "15 min" },
      { day: 5, topic: "Return of spontaneous circulation (ROSC)", resource: "EM Cases", url: "https://www.youtube.com/watch?v=6BLDDD7fK_Q", duration: "15 min" },
      { day: 5, topic: "Targeted temperature management", resource: "ALiEM", url: "https://www.youtube.com/watch?v=gCR5cCLJNCI", duration: "15 min" },
      { day: 6, topic: "Airway skills workshop", resource: "YouTube: EMCrit, EM Core", url: "https://www.youtube.com/watch?v=3CcmfFmqrjA", duration: "30 min" },
      { day: 7, topic: "BUFFER DAY — revisit anything fuzzy, fill gaps", resource: "—", url: null, duration: "60 min", isBuffer: true },
      { day: 7, topic: "🎯 BONUS: Undifferentiated patient approach — sick vs not sick. Build your own mental checklist.", resource: "—", url: null, duration: "15 min", isBonus: true },
    ]
  },
  {
    week: 2, weekName: "Imaging & Interpretation",
    days: [
      { day: 8, topic: "Chest X-ray systematic approach", resource: "Radiology Head (YouTube)", url: "https://www.youtube.com/watch?v=Tpq_qLCSJ78", duration: "20 min" },
      { day: 8, topic: "CXR — pneumonia, effusion, pneumothorax", resource: "EMLTW", url: "https://www.youtube.com/watch?v=81d49L52G4E", duration: "20 min" },
      { day: 8, topic: "CXR — CHF, pulmonary edema", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Y5YKZQpelnM", duration: "15 min" },
      { day: 9, topic: "EKG systematic approach", resource: "Heilman's EKG (YouTube playlist)", url: "https://www.youtube.com/watch?v=b9n64xc0XR0", duration: "25 min" },
      { day: 9, topic: "STEMI recognition & mimics", resource: "ALiEM / EM Cases", url: "https://www.youtube.com/watch?v=uyKuAr9QfvE", duration: "20 min" },
      { day: 9, topic: "STEMI equivalents in LBBB, V-tach", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Xq2w8RC5M6c", duration: "15 min" },
      { day: 10, topic: "Sgarbossa criteria, Wellens' sign", resource: "ALiEM", url: "https://www.youtube.com/watch?v=FrfNHEKMSnU", duration: "15 min" },
      { day: 10, topic: "EKG interpretation practice (50+ tracings)", resource: "Training/Test Mode (websites)", url: null, duration: "30 min" },
      { day: 11, topic: "CT head interpretation", resource: "radiologyhead.com", url: "https://www.youtube.com/watch?v=qvLTkwkpOIg", duration: "25 min" },
      { day: 11, topic: "CT cervical spine clearance", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Yh5TzteUDYo", duration: "15 min" },
      { day: 11, topic: "CT PE interpretation / Wells score", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Yh5TzteUDYo", duration: "15 min" },
      { day: 12, topic: "Abdominal X-ray approach", resource: "EMLTW", url: "https://www.youtube.com/watch?v=Yh5TzteUDYo", duration: "15 min" },
      { day: 12, topic: "FAST exam / trauma ultrasound", resource: "Core EM (YouTube)", url: "https://www.youtube.com/watch?v=6GZmomw6i0M", duration: "25 min" },
      { day: 13, topic: "Pelvic X-ray — fractures", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "20 min" },
      { day: 13, topic: "Basic orthopedic X-ray reading", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "20 min" },
      { day: 14, topic: "BUFFER DAY — image interpretation drill", resource: "—", url: null, duration: "60 min", isBuffer: true },
      { day: 15, topic: "Neck CT angiography (dissection, stenosis)", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Yh5TzteUDYo", duration: "15 min" },
      { day: 15, topic: "Aortic dissection — imaging", resource: "EM Cases", url: "https://www.youtube.com/watch?v=Yh5TzteUDYo", duration: "15 min" },
      { day: 15, topic: "Appendicitis imaging (CT, ultrasound)", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
    ]
  },
  {
    week: 3, weekName: "Core Presentations",
    days: [
      { day: 16, topic: "Chest pain workup — full approach", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 16, topic: "Troponin interpretation, rule-out/rule-in", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 16, topic: "Pulmonary embolism — Wells, PERC, D-dimer", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 17, topic: "Dyspnea / shortness of breath — full approach", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 17, topic: "Asthma & COPD exacerbation", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 17, topic: "Congestive heart failure exacerbation", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 18, topic: "Abdominal pain — adult", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 18, topic: "Appendicitis, diverticulitis, pancreatitis", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "25 min" },
      { day: 18, topic: "Mesenteric ischemia — high suspicion index", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 19, topic: "Headache — subarachnoid, meningitis, giant cell arteritis", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 19, topic: "CVA / stroke — tPA window, thrombectomy", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 19, topic: "Seizures — status epilepticus", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 20, topic: "Fever workup — adult", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 20, topic: "Sepsis — qSOFA, SIRS, early antibiotics", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "20 min" },
      { day: 20, topic: "Soft tissue infections — necrotizing fasciitis", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 21, topic: "BUFFER DAY — fill any gaps from Week 3", resource: "—", url: null, duration: "60 min", isBuffer: true },
    ]
  },
  // ============ PHASE 2 ============
  {
    phase: 2, phaseName: "Clinical Presentations Deep Dive", subtitle: "Building depth in common presentations",
    week: 4, weekName: "Cardiac & Vascular",
    days: [
      { day: 22, topic: "Atrial fibrillation / flutter", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 22, topic: "Wide complex tachycardia", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 22, topic: "Bradyarrhythmias & heart block", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 23, topic: "Hypertensive emergency", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 23, topic: "Aortic stenosis murmur", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "10 min" },
      { day: 23, topic: "Pericarditis, myocarditis, endocarditis", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 24, topic: "Aortic dissection — full", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 24, topic: "DVT / superficial thrombophlebitis", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 24, topic: "Vascular emergencies of the limb", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 25, topic: "Syncope — risk stratification, cardiac vs vasovagal", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 25, topic: "Palpitations — approach", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 25, topic: "Cardiogenic shock, obstructive shock", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 26, topic: "BUFFER", resource: "—", url: null, duration: "60 min", isBuffer: true },
    ]
  },
  {
    week: 5, weekName: "Abdomen & GI",
    days: [
      { day: 27, topic: "GI bleeding — upper vs lower", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 27, topic: "Variceal bleeding, TXA", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 27, topic: "Abdominal compartment syndrome", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 28, topic: "Bowel obstruction — small vs large", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 28, topic: "Colorectal cancer emergencies", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 28, topic: "Hernia emergencies", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 29, topic: "Liver failure, ascites, SBP", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "20 min" },
      { day: 29, topic: "Biliary — cholelithiasis, cholecystitis, cholangitis", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 29, topic: "Pancreatitis — Atlanta classification, necrosis", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 30, topic: "Esophageal emergencies — Boerhaave, food impaction", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 30, topic: "Hemorrhoids, anal fissures, perianal abscess", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 30, topic: "Abdominal trauma", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 31, topic: "BUFFER", resource: "—", url: null, duration: "60 min", isBuffer: true },
    ]
  },
  {
    week: 6, weekName: "Neuro & Psych",
    days: [
      { day: 32, topic: "CVA — full thrombolysis protocol", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 32, topic: "Large vessel occlusion — thrombectomy", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 32, topic: "Stroke mimics — seizures, migraine, functional", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 33, topic: "Subarachnoid hemorrhage — LP criteria, CTA", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 33, topic: "Traumatic brain injury — ICP, herniation", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 33, topic: "Spinal cord emergencies — compression, SCIWORA", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 34, topic: "Meningitis & encephalitis — empiric antibiotics", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 34, topic: "Guillain-Barré, myasthenia gravis", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "20 min" },
      { day: 34, topic: "Multiple sclerosis, ADEM, optic neuritis", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 35, topic: "Altered mental status — full approach", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 35, topic: "Delirium vs dementia vs psychiatric", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 35, topic: "Psychogenic nonepileptic seizures (PNES)", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "10 min" },
      { day: 36, topic: "BUFFER", resource: "—", url: null, duration: "60 min", isBuffer: true },
      { day: 37, topic: "Psychiatric emergencies — agitation, restraints", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 37, topic: "Excited delirium syndrome — recognition, pearls", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 37, topic: "Suicide risk assessment", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 37, topic: "Serotonin syndrome, neuroleptic malignant syndrome", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
    ]
  },
  {
    week: 7, weekName: "Peds & OB",
    days: [
      { day: 38, topic: "Pediatric fever < 30 days — full workup", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 38, topic: "Pediatric respiratory distress — croup, epiglottitis, bronchiolitis", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 38, topic: "Pediatric asthma & bronchiolitis", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "20 min" },
      { day: 39, topic: "Pediatric abdominal pain — intussusception, malrotation, appendicitis", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 39, topic: "Pediatric vomiting — pyloric stenosis, dehydration", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 39, topic: "Pediatric seizures — febrile, status", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 40, topic: "Pediatric trauma — CT decisions, fluid resuscitation", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 40, topic: "Neonatal emergencies — bradycardia, sepsis, jaundice", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "20 min" },
      { day: 40, topic: "Pediatric rashes — purpura, Stevens-Johnson", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 41, topic: "OB emergencies — ectopic, placental abruption, previa", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 41, topic: "Post-partum hemorrhage", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 41, topic: "Pre-eclampsia / eclampsia / HELLP", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 42, topic: "Vaginal bleeding in pregnancy", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 42, topic: "Normal labor, precipitous delivery", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 42, topic: "BUFFER", resource: "—", url: null, duration: "60 min", isBuffer: true },
    ]
  },
  {
    week: 8, weekName: "Tox, Endo, Heme-Onc",
    days: [
      { day: 43, topic: "Acetaminophen overdose — N-acetylcysteine", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 43, topic: "Salicylate overdose", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 43, topic: "Opioid overdose — naloxone, withdrawal", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 44, topic: "Tricyclic antidepressant overdose", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 44, topic: "Digoxin toxicity", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 44, topic: "Toxidromes — anticholinergic, cholinergic, sympathomimetic", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "25 min" },
      { day: 45, topic: "DKA — full approach", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 45, topic: "HHS (Hyperosmolar hyperglycemic state)", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 45, topic: "Thyroid storm, myxedema coma", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 46, topic: "Adrenal insufficiency / crisis", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 46, topic: "Electrolyte emergencies — K, Na, Ca, Mg", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 46, topic: "Sickle cell crisis", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 47, topic: "Oncologic emergencies — febrile neutropenia, SVC syndrome", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "25 min" },
      { day: 47, topic: "Spinal cord compression in cancer", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 47, topic: "Tumor lysis syndrome", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 48, topic: "Social emergencies — homelessness, food insecurity, warm handoffs, child/elder abuse", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "25 min" },
      { day: 48, topic: "Addiction medicine in the ED — fentanyl/methamphetamine, buprenorphine, withdrawal protocols", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "25 min" },
      { day: 48, topic: "BUFFER — revisit anything fuzzy", resource: "—", url: null, duration: "10 min", isBuffer: true },
    ]
  },
  // ============ PHASE 3 ============
  {
    phase: 3, phaseName: "Specialty Refreshers", subtitle: "Deep dives into specialty areas",
    week: 9, weekName: "Ortho, Wound, MSK",
    days: [
      { day: 49, topic: "Open fractures, compartment syndrome", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 49, topic: "Hip fractures — displaced vs non-displaced", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 49, topic: "Shoulder / elbow — dislocations, reductions", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "25 min" },
      { day: 50, topic: "Hand emergencies — tendon injuries, infections, nail bed", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "25 min" },
      { day: 50, topic: "Wound care — irrigation, closure, antibiotics", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "25 min" },
      { day: 50, topic: "Animal & human bites", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 51, topic: "Low back pain — red flags, cauda equina", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 51, topic: "Knee — ligament injuries, effusion", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "20 min" },
      { day: 51, topic: "Ankle & foot injuries", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 52, topic: "BUFFER", resource: "—", url: null, duration: "60 min", isBuffer: true },
    ]
  },
  {
    week: 10, weekName: "ENT, Eye, Skin, Environmental",
    days: [
      { day: 53, topic: "Epistaxis — anterior vs posterior packing", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "20 min" },
      { day: 53, topic: "Foreign body — ear, nose, throat", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "20 min" },
      { day: 53, topic: "Peritonsillar abscess, Ludwig angina", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 54, topic: "Acute angle closure glaucoma", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 54, topic: "Corneal abrasion, foreign body", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 54, topic: "Hyphema, globe rupture", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 55, topic: "Vision loss — painless acute", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 55, topic: "Retinal artery occlusion, giant cell arteritis", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 55, topic: "Toxic epidermal necrolysis, Stevens-Johnson", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 56, topic: "Burns — full approach", resource: "EM Cases", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 56, topic: "Smoke inhalation, carbon monoxide poisoning", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 56, topic: "Drowning, diving emergencies", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 57, topic: "Heat stroke, hypothermia, frostbite", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "25 min" },
      { day: 57, topic: "Bites & stings — snake, scorpion, marine", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "25 min" },
      { day: 57, topic: "BUFFER", resource: "—", url: null, duration: "60 min", isBuffer: true },
    ]
  },
  // ============ PHASE 4 ============
  {
    phase: 4, phaseName: "Procedures & Logistics", subtitle: "Hands-on skills and ED culture",
    week: 11, weekName: "Core Procedures",
    days: [
      { day: 58, topic: "Peripheral IV — hard sticks, ultrasound guided", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "20 min" },
      { day: 58, topic: "Central line — femoral, subclavian, IJ", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "30 min" },
      { day: 58, topic: "Arterial line placement", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "15 min" },
      { day: 59, topic: "Lumbar puncture — indications, positioning, manometry", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "25 min" },
      { day: 59, topic: "Thoracentesis", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "20 min" },
      { day: 59, topic: "Paracentesis", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "15 min" },
      { day: 60, topic: "Wound closure — simple, layered, vertical mattress", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "25 min" },
      { day: 60, topic: "Tube thoracostomy (chest tube)", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "25 min" },
      { day: 60, topic: "Nasogastric tube placement", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "10 min" },
      { day: 61, topic: "Fracture reduction — femur, humerus, wrist", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "30 min" },
      { day: 61, topic: "Splinting principles — sugar tong, long arm, short arm", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 61, topic: "Shoulder reduction techniques", resource: "Core EM", url: "https://www.youtube.com/watch?v=3CcmfFmqjA", duration: "20 min" },
      { day: 62, topic: "Dental emergencies — nerve block, extractions", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "25 min" },
      { day: 62, topic: "Digital block, regional anesthesia", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 62, topic: "BUFFER", resource: "—", url: null, duration: "60 min", isBuffer: true },
    ]
  },
  {
    week: 12, weekName: "Logistics & Culture",
    days: [
      { day: 63, topic: "ED throughput, boarding, admission decisions", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 63, topic: "Signout — structured handoffs, I-PASS", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "15 min" },
      { day: 63, topic: "Documentation — E&M, procedures, consultations", resource: "EMRAP (YouTube)", url: "https://www.youtube.com/watch?v=MpGzBxy7r5E", duration: "25 min" },
      { day: 64, topic: "Emergency medical services — ambulance, base station", resource: "EMLTW", url: "https://www.youtube.com/watch?v=QVpxKzpdh9g", duration: "15 min" },
      { day: 64, topic: "Consultations — how to talk to surgery, cards, neuro", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 64, topic: "Medicolegal — implicit bias, boundaries, liability", resource: "ALiEM", url: "https://www.youtube.com/watch?v=Hf6V6Q6dXsA", duration: "20 min" },
      { day: 65, topic: "FINAL BUFFER — assess gaps, revisit anything", resource: "—", url: null, duration: "60 min", isBuffer: true },
    ]
  },
];

// Group days by their actual day number
function groupDaysByDay(weekData) {
  const groups = {};
  weekData.days.forEach(d => {
    if (!groups[d.day]) groups[d.day] = [];
    groups[d.day].push(d);
  });
  return groups;
}

// Resource color coding
function getResourceColor(resource) {
  if (resource.includes('ALiEM')) return 'resource-aliem';
  if (resource.includes('EM Cases')) return 'resource-emcases';
  if (resource.includes('Core EM')) return 'resource-coreem';
  if (resource.includes('EMLTW')) return 'resource-emltw';
  if (resource.includes('YouTube')) return 'resource-youtube';
  if (resource.includes('ACEP')) return 'resource-acep';
  if (resource.includes('AHA')) return 'resource-aha';
  if (resource.includes('radiologyhead')) return 'resource-radhead';
  if (resource.includes('Heilman')) return 'resource-ekg';
  if (resource === '—') return 'resource-buffer';
  return 'resource-default';
}

function renderWeek(weekData, container) {
  const groups = groupDaysByDay(weekData);

  // Week header
  const weekHeader = document.createElement('div');
  weekHeader.className = 'week-header';
  weekHeader.innerHTML = `
    <h2 class="week-title">Week ${weekData.week}</h2>
    ${weekData.weekName ? `<span class="week-subtitle">${weekData.weekName}</span>` : ''}
  `;
  container.appendChild(weekHeader);

  // Phase separator
  if (weekData.phase) {
    const phaseDiv = document.createElement('div');
    phaseDiv.className = 'phase-separator';
    phaseDiv.innerHTML = `
      <span class="phase-badge">Phase ${weekData.phase}: ${weekData.phaseName}</span>
      ${weekData.subtitle ? `<span class="phase-desc">${weekData.subtitle}</span>` : ''}
    `;
    container.appendChild(phaseDiv);
  }

  // Days
  Object.keys(groups).sort((a, b) => a - b).forEach(dayNum => {
    const dayItems = groups[dayNum];

    const daySection = document.createElement('div');
    daySection.className = 'day-section';

    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    dayHeader.innerHTML = `<span class="day-number">Day ${dayNum}</span>`;
    daySection.appendChild(dayHeader);

    dayItems.forEach(item => {
      const card = document.createElement('div');
      let cardClass = 'topic-card';
      if (item.isBuffer) cardClass += ' buffer-card';
      if (item.isBonus) cardClass += ' bonus-card';
      card.className = cardClass;

      const resourceClass = getResourceColor(item.resource);

      card.innerHTML = `
        <div class="card-topic">${item.topic}</div>
        <div class="card-meta">
          <span class="resource-tag ${resourceClass}">${item.resource}</span>
          <span class="duration-tag">⏱ ${item.duration}</span>
        </div>
        ${item.url ? `<a href="${item.url}" target="_blank" class="watch-btn">▶ Watch</a>` : ''}
      `;
      daySection.appendChild(card);
    });

    container.appendChild(daySection);
  });
}

// Render everything
const app = document.querySelector('#app');

// Header
const header = document.createElement('div');
header.className = 'app-header';
header.innerHTML = `
  <div class="header-top">
    <h1>EM Intern Readiness</h1>
    <span class="header-meta">St. Joseph's Stockton · June 15</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill" id="progressFill"></div>
    <span class="progress-label" id="progressLabel">Day 0 / 65</span>
  </div>
`;
app.appendChild(header);

// Week tabs
const tabBar = document.createElement('div');
tabBar.className = 'tab-bar';
tabBar.id = 'tabBar';
app.appendChild(tabBar);

// Content
const content = document.createElement('div');
content.className = 'content';
content.id = 'content';
app.appendChild(content);

// Footer
const footer = document.createElement('div');
footer.className = 'app-footer';
footer.innerHTML = `
  <div class="footer-resources">
    <span class="resource-tag resource-aliem">ALiEM</span>
    <span class="resource-tag resource-emcases">EM Cases</span>
    <span class="resource-tag resource-coreem">Core EM</span>
    <span class="resource-tag resource-emltw">EMLTW</span>
  </div>
`;
app.appendChild(footer);

// Build tabs
const phases = {};
curriculum.forEach(w => {
  if (w.phase && !phases[w.phase]) {
    phases[w.phase] = { name: w.phaseName, weeks: [] };
  }
  if (w.phase) {
    phases[w.phase].weeks.push(w);
  }
});

let currentWeek = 0;
const allWeeks = curriculum;

function selectTab(idx) {
  currentWeek = idx;
  document.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
  content.innerHTML = '';
  renderWeek(allWeeks[idx], content);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Build tabs
allWeeks.forEach((w, i) => {
  const tab = document.createElement('button');
  tab.className = 'tab' + (i === 0 ? ' active' : '');
  tab.textContent = `Wk ${w.week}`;
  tab.addEventListener('click', () => selectTab(i));
  tabBar.appendChild(tab);
});

// Render first week
renderWeek(allWeeks[0], content);

// Update progress display
const totalDays = 65;
const firstDay = 1;
document.getElementById('progressLabel').textContent = `Day ${firstDay} – ${totalDays} total`;

// No Discord SDK — standalone build
