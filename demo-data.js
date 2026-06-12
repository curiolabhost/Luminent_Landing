// Demo walkthrough data (teacher STEPS + STUDENT_STEPS). Extracted from index.html.
// Indigo/lavender accents recolored to steel; on-screen tone neutralized. Copy overridden by landing.html META.

const STEPS = [
  {
    label: "Create a new course",
    action: 'User action',
    desc: 'User arrives at the Luminent dashboard and clicks New course. They type Intro to JavaScript and confirm.',
    title: "luminent.app · dashboard",
    svg: `<svg class="scene" viewBox="0 0 820 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="400" fill="#1E293B"/>
  <!-- Sidebar -->
  <rect x="0" y="0" width="200" height="400" fill="#162032"/>
  <text x="20" y="30" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <rect x="12" y="50" width="176" height="32" rx="6" fill="#1E3A5F" opacity="0.6"/>
  <text x="36" y="71" font-size="12" fill="#94A3B8" font-family="Arial">Courses</text>
  <text x="36" y="105" font-size="12" fill="#64748B" font-family="Arial">Settings</text>
  <text x="36" y="135" font-size="12" fill="#64748B" font-family="Arial">Help</text>
  <!-- Main area -->
  <text x="230" y="52" font-size="14" font-weight="600" fill="#E2E8F0" font-family="Arial">My Courses</text>
  <!-- Empty state card -->
  <rect x="230" y="80" width="560" height="280" rx="10" fill="#162032" stroke="#334155" stroke-width="1"/>
  <!-- Dashed inner area -->
  <rect x="270" y="110" width="480" height="200" rx="8" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="510" y="196" font-size="13" fill="#475569" font-family="Arial" text-anchor="middle">No courses yet</text>
  <text x="510" y="216" font-size="12" fill="#334155" font-family="Arial" text-anchor="middle">Create your first course to get started</text>
  <!-- New course button (highlighted) -->
  <rect x="432" y="240" width="156" height="36" rx="7" fill="#4682B4"/>
  <text x="510" y="263" font-size="13" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">+ New course</text>
  <!-- Cursor -->
  <polygon points="510,250 502,268 506,266 507,272 511,264 515,266" fill="#fff" opacity="0.9"/>
</svg>`
  },
  {
    label: "Name the course",
    action: 'User action',
    desc: 'A modal appears. User types the course name and selects the subject. One click to create.',
    title: "luminent.app · new course",
    svg: `<svg class="scene" viewBox="0 0 820 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="400" fill="#1E293B" opacity="0.4"/>
  <!-- Modal backdrop -->
  <rect width="820" height="400" fill="#0F172A" opacity="0.7"/>
  <!-- Modal -->
  <rect x="260" y="90" width="300" height="230" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1"/>
  <text x="410" y="122" font-size="14" font-weight="600" fill="#E2E8F0" font-family="Arial" text-anchor="middle">New Course</text>
  <!-- Input field -->
  <text x="278" y="155" font-size="11" fill="#94A3B8" font-family="Arial">Course name</text>
  <rect x="278" y="163" width="264" height="36" rx="6" fill="#162032" stroke="#4682B4" stroke-width="1.5"/>
  <text x="292" y="185" font-size="13" fill="#E2E8F0" font-family="Arial">Intro to JavaScript</text>
  <!-- Cursor blink in field -->
  <rect x="432" y="169" width="1.5" height="18" fill="#38BDF8" opacity="0.9"/>
  <!-- Subject select -->
  <text x="278" y="222" font-size="11" fill="#94A3B8" font-family="Arial">Subject</text>
  <rect x="278" y="230" width="264" height="36" rx="6" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="292" y="252" font-size="13" fill="#94A3B8" font-family="Arial">Computer Science</text>
  <text x="526" y="252" font-size="11" fill="#64748B" font-family="Arial" text-anchor="end">▾</text>
  <!-- Create button -->
  <rect x="278" y="286" width="264" height="18" rx="0" fill="none"/>
  <rect x="278" y="284" width="264" height="36" rx="7" fill="#4682B4"/>
  <text x="410" y="306" font-size="13" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">Create course</text>
</svg>`
  },
  {
    label: "Drop syllabus: Luminent parses it",
    action: 'User action + Luminent response',
    desc: 'Course is created. User drops a syllabus (pdf, docx) into the upload zone. Luminent parses it and builds a draft curriculum tree.',
    title: "luminent.app · Intro to JavaScript",
    svg: `<svg class="scene" viewBox="0 0 820 440" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="440" fill="#1E293B"/>
  <!-- Sidebar -->
  <rect x="0" y="0" width="210" height="440" fill="#162032"/>
  <text x="20" y="30" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="20" y="60" font-size="11" fill="#94A3B8" font-family="Arial">Intro to JavaScript</text>
  <text x="20" y="90" font-size="10" fill="#334155" font-family="Arial" letter-spacing="1">CURRICULUM</text>
  <rect x="20" y="105" width="140" height="10" rx="3" fill="#263246"/>
  <rect x="30" y="123" width="120" height="10" rx="3" fill="#1E2D3D"/>
  <rect x="30" y="141" width="110" height="10" rx="3" fill="#1E2D3D"/>
  <rect x="20" y="159" width="130" height="10" rx="3" fill="#263246"/>
  <rect x="30" y="177" width="115" height="10" rx="3" fill="#1E2D3D"/>
  <!-- Main header -->
  <text x="240" y="44" font-size="14" font-weight="600" fill="#E2E8F0" font-family="Arial">Course setup</text>
  <text x="240" y="64" font-size="12" fill="#64748B" font-family="Arial">Drop your syllabus to let Luminent build the course structure for you.</text>
  <!-- Drop zone -->
  <rect x="240" y="82" width="555" height="300" rx="10" fill="#162032" stroke="#4682B4" stroke-width="1.5" stroke-dasharray="8 5"/>
  <!-- PDF icon block · top center of drop zone -->
  <rect x="355" y="112" width="72" height="88" rx="6" fill="#1E3A5F" stroke="#334155" stroke-width="1"/>
  <rect x="391" y="112" width="36" height="28" rx="0" fill="#263E5C"/>
  <polygon points="391,112 427,112 427,140" fill="#4682B4" opacity="0.4"/>
  <text x="391" y="168" font-size="9" fill="#94A3B8" font-family="Arial" text-anchor="middle">SYLLABUS</text>
  <text x="391" y="182" font-size="9" fill="#94A3B8" font-family="Arial" text-anchor="middle">F24.pdf</text>
  <!-- Status text · below icon, centered -->
  <text x="520" y="136" font-size="13" font-weight="500" fill="#E2E8F0" font-family="Arial">Syllabus dropped</text>
  <text x="520" y="158" font-size="12" fill="#94A3B8" font-family="Arial">Luminent is reading the structure...</text>
  <!-- Progress bar · below status text -->
  <rect x="460" y="172" width="220" height="6" rx="3" fill="#263246"/>
  <rect x="460" y="172" width="148" height="6" rx="3" fill="#4682B4"/>
  <!-- Detected chips -->
  <text x="240" y="406" font-size="11" fill="#64748B" font-family="Arial">Detected →</text>
  <rect x="316" y="390" width="82" height="26" rx="5" fill="#1E3A5F" stroke="#334155" stroke-width="1"/>
  <text x="357" y="407" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">7 units</text>
  <rect x="408" y="390" width="100" height="26" rx="5" fill="#1E3A5F" stroke="#334155" stroke-width="1"/>
  <text x="458" y="407" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">24 sections</text>
  <rect x="518" y="390" width="130" height="26" rx="5" fill="#1E3A5F" stroke="#334155" stroke-width="1"/>
  <text x="583" y="407" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">textbook reference</text>
</svg>`
  },
  {
    label: "Curriculum tree generated, materials attached",
    action: 'Luminent response + user action',
    desc: 'Luminent builds the course tree from the syllabus. User drags slides into Unit 1 and sets the textbook as a course-wide reference.',
    title: "luminent.app · Intro to JavaScript",
    svg: `<svg class="scene" viewBox="0 0 820 480" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="480" fill="#1E293B"/>
  <!-- Sidebar tree -->
  <rect x="0" y="0" width="230" height="480" fill="#162032"/>
  <text x="16" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="16" y="50" font-size="11" fill="#94A3B8" font-family="Arial">Intro to JavaScript</text>
  <text x="16" y="76" font-size="10" fill="#475569" font-family="Arial" letter-spacing="1">CURRICULUM</text>
  <!-- Tree -->
  <text x="16" y="98" font-size="12" font-weight="600" fill="#E2E8F0" font-family="Arial">▾  Unit 1: Foundations</text>
  <line x1="26" y1="105" x2="26" y2="190" stroke="#334155" stroke-width="1"/>
  <line x1="26" y1="120" x2="38" y2="120" stroke="#334155" stroke-width="1"/>
  <rect x="38" y="110" width="170" height="22" rx="4" fill="#1E3A5F"/>
  <text x="48" y="125" font-size="11" fill="#94A3B8" font-family="Arial">1.1 Variables</text>
  <line x1="26" y1="148" x2="38" y2="148" stroke="#334155" stroke-width="1"/>
  <text x="48" y="153" font-size="11" fill="#64748B" font-family="Arial">1.2 Conditionals</text>
  <line x1="26" y1="172" x2="38" y2="172" stroke="#334155" stroke-width="1"/>
  <text x="48" y="177" font-size="11" fill="#64748B" font-family="Arial">1.3 Loops</text>
  <text x="16" y="208" font-size="12" fill="#64748B" font-family="Arial">▸  Unit 2: Functions</text>
  <text x="16" y="232" font-size="12" fill="#64748B" font-family="Arial">▸  Unit 3: Arrays</text>
  <text x="16" y="256" font-size="12" fill="#64748B" font-family="Arial">▸  Unit 4: Objects</text>
  <text x="16" y="280" font-size="12" fill="#475569" font-family="Arial">▸  Unit 5: DOM</text>
  <text x="16" y="304" font-size="12" fill="#475569" font-family="Arial">▸  Unit 6: Events</text>
  <text x="16" y="328" font-size="12" fill="#475569" font-family="Arial">▸  Unit 7: Projects</text>
  <!-- Textbook ref badge -->
  <rect x="10" y="380" width="210" height="44" rx="7" fill="#1E2D3D" stroke="#334155" stroke-width="1"/>
  <text x="20" y="397" font-size="10" fill="#475569" font-family="Arial">COURSE REFERENCE</text>
  <text x="20" y="415" font-size="11" fill="#94A3B8" font-family="Arial">📖  Eloquent JavaScript</text>
  <!-- Main panel -->
  <text x="258" y="48" font-size="14" font-weight="600" fill="#E2E8F0" font-family="Arial">Unit 1 · Foundations</text>
  <text x="258" y="68" font-size="12" fill="#64748B" font-family="Arial">Attach materials to each section before generating.</text>
  <!-- Section 1.1 card (active) -->
  <rect x="258" y="88" width="540" height="100" rx="8" fill="#162032" stroke="#4682B4" stroke-width="1.5"/>
  <text x="276" y="112" font-size="13" font-weight="600" fill="#E2E8F0" font-family="Arial">1.1  Variables and Data Types</text>
  <!-- Material chips -->
  <rect x="276" y="124" width="110" height="24" rx="5" fill="#1E3A5F" stroke="#334155" stroke-width="1"/>
  <text x="331" y="140" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">week1_slides.pdf</text>
  <rect x="396" y="124" width="90" height="24" rx="5" fill="#1E2D3D" stroke="#334155" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="441" y="140" font-size="11" fill="#475569" font-family="Arial" text-anchor="middle">+ add file</text>
  <!-- Generate button -->
  <rect x="650" y="116" width="130" height="34" rx="7" fill="#4682B4"/>
  <text x="715" y="137" font-size="12" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">Generate ↗</text>
  <!-- Textbook reference note -->
  <text x="276" y="178" font-size="11" fill="#475569" font-family="Arial">Also uses: Eloquent JavaScript (course reference)</text>
  <!-- Section 1.2 card -->
  <rect x="258" y="200" width="540" height="72" rx="8" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="276" y="224" font-size="13" fill="#94A3B8" font-family="Arial">1.2  Conditionals</text>
  <rect x="276" y="236" width="90" height="24" rx="5" fill="#1E2D3D" stroke="#334155" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="321" y="252" font-size="11" fill="#475569" font-family="Arial" text-anchor="middle">+ add file</text>
  <!-- Section 1.3 card -->
  <rect x="258" y="284" width="540" height="72" rx="8" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="276" y="308" font-size="13" fill="#94A3B8" font-family="Arial">1.3  Loops</text>
  <rect x="276" y="320" width="90" height="24" rx="5" fill="#1E2D3D" stroke="#334155" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="321" y="336" font-size="11" fill="#475569" font-family="Arial" text-anchor="middle">+ add file</text>
</svg>`
  },
  {
    label: "Generate section 1.1",
    action: 'User action + Luminent response',
    desc: 'User clicks Generate on section 1.1. Luminent shows a visible step sequence as it works through the material.',
    title: "luminent.app · generating 1.1",
    svg: `<svg class="scene" viewBox="0 0 820 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="420" fill="#1E293B"/>
  <rect x="0" y="0" width="230" height="420" fill="#162032"/>
  <text x="16" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="16" y="50" font-size="11" fill="#94A3B8" font-family="Arial">Intro to JavaScript</text>
  <text x="16" y="98" font-size="12" font-weight="600" fill="#E2E8F0" font-family="Arial">▾  Unit 1: Foundations</text>
  <rect x="38" y="110" width="170" height="22" rx="4" fill="#1E3A5F"/>
  <text x="48" y="125" font-size="11" fill="#94A3B8" font-family="Arial">1.1 Variables</text>
  <text x="48" y="153" font-size="11" fill="#64748B" font-family="Arial">1.2 Conditionals</text>
  <text x="48" y="177" font-size="11" fill="#64748B" font-family="Arial">1.3 Loops</text>
  <!-- Main: generation progress -->
  <text x="258" y="48" font-size="14" font-weight="600" fill="#E2E8F0" font-family="Arial">Generating 1.1 · Variables and Data Types</text>
  <text x="258" y="68" font-size="12" fill="#64748B" font-family="Arial">Source: week1_slides.pdf · Eloquent JavaScript ch.1</text>
  <!-- Steps -->
  <!-- Step 1: done -->
  <circle cx="278" cy="112" r="10" fill="#4682B4"/>
  <text x="278" y="116" font-size="10" fill="#fff" font-family="Arial" text-anchor="middle">✓</text>
  <line x1="278" y1="122" x2="278" y2="158" stroke="#334155" stroke-width="1"/>
  <text x="298" y="116" font-size="13" fill="#94A3B8" font-family="Arial">Parsing slides</text>
  <text x="298" y="132" font-size="11" fill="#475569" font-family="Arial">23 pages · 8 concept blocks found</text>
  <!-- Step 2: done -->
  <circle cx="278" cy="168" r="10" fill="#4682B4"/>
  <text x="278" y="172" font-size="10" fill="#fff" font-family="Arial" text-anchor="middle">✓</text>
  <line x1="278" y1="178" x2="278" y2="214" stroke="#334155" stroke-width="1"/>
  <text x="298" y="172" font-size="13" fill="#94A3B8" font-family="Arial">Mapping to textbook reference</text>
  <text x="298" y="188" font-size="11" fill="#475569" font-family="Arial">Chapter 1, pp. 4·18 matched</text>
  <!-- Step 3: active -->
  <circle cx="278" cy="224" r="10" fill="#1E3A5F" stroke="#4682B4" stroke-width="1.5"/>
  <text x="278" y="228" font-size="11" fill="#38BDF8" font-family="Arial" text-anchor="middle">3</text>
  <line x1="278" y1="234" x2="278" y2="270" stroke="#334155" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="298" y="228" font-size="13" fill="#E2E8F0" font-family="Arial">Assembling lesson pages</text>
  <!-- Animated progress bar -->
  <rect x="298" y="238" width="340" height="5" rx="2.5" fill="#263246"/>
  <rect x="298" y="238" width="220" height="5" rx="2.5" fill="#4682B4"/>
  <text x="298" y="258" font-size="11" fill="#475569" font-family="Arial">Building navigatable content...</text>
  <!-- Step 4: pending -->
  <circle cx="278" cy="280" r="10" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="278" y="284" font-size="11" fill="#475569" font-family="Arial" text-anchor="middle">4</text>
  <text x="298" y="284" font-size="13" fill="#475569" font-family="Arial">Generating exercises</text>
  <!-- Step 5: pending -->
  <circle cx="278" cy="322" r="10" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="278" y="326" font-size="11" fill="#475569" font-family="Arial" text-anchor="middle">5</text>
  <text x="298" y="326" font-size="13" fill="#475569" font-family="Arial">Done</text>
  <!-- Coherence note -->
  <rect x="258" y="360" width="540" height="38" rx="7" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="276" y="382" font-size="11" fill="#475569" font-family="Arial">Strict coherence mode · content generated only from attached materials.</text>
</svg>`
  },
  {
    label: "Generated lesson view: left + right panel",
    action: 'Luminent response',
    desc: 'Section 1.1 is now live. Left panel shows navigatable lesson pages from the slides. Right panel shows tabbed tools: Notes, Takeaways, Flashcards, Exercises.',
    title: "luminent.app · 1.1 Variables and Data Types",
    svg: `<svg class="scene" viewBox="0 0 820 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="500" fill="#1E293B"/>
  <!-- Left nav sidebar -->
  <rect x="0" y="0" width="175" height="500" fill="#162032"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="50" font-size="10" fill="#475569" font-family="Arial">Intro to JavaScript</text>
  <text x="12" y="72" font-size="10" fill="#334155" font-family="Arial" letter-spacing="1">1.1 VARIABLES</text>
  <!-- Page nav -->
  <rect x="10" y="82" width="155" height="26" rx="4" fill="#1E3A5F"/>
  <text x="20" y="99" font-size="11" fill="#E2E8F0" font-family="Arial">Intro to Variables</text>
  <text x="20" y="126" font-size="11" fill="#64748B" font-family="Arial">let and const</text>
  <text x="20" y="150" font-size="11" fill="#64748B" font-family="Arial">var vs let vs const</text>
  <text x="20" y="174" font-size="11" fill="#64748B" font-family="Arial">Data Types</text>
  <text x="20" y="198" font-size="11" fill="#64748B" font-family="Arial">Type coercion</text>
  <text x="20" y="222" font-size="11" fill="#64748B" font-family="Arial">Summary</text>
  <!-- Progress bar -->
  <text x="12" y="440" font-size="10" fill="#475569" font-family="Arial">Progress</text>
  <rect x="12" y="450" width="151" height="5" rx="2.5" fill="#263246"/>
  <rect x="12" y="450" width="24" height="5" rx="2.5" fill="#4682B4"/>
  <text x="12" y="470" font-size="10" fill="#334155" font-family="Arial">Page 1 of 6</text>
  <!-- Main: lesson content -->
  <rect x="175" y="0" width="370" height="500" fill="#1A2433"/>
  <!-- Lesson page content -->
  <text x="195" y="36" font-size="13" font-weight="600" fill="#E2E8F0" font-family="Arial">Intro to Variables</text>
  <text x="195" y="56" font-size="11" fill="#475569" font-family="Arial">From: week1_slides.pdf · Slide 3</text>
  <line x1="195" y1="65" x2="525" y2="65" stroke="#263246" stroke-width="1"/>
  <!-- Concept block -->
  <rect x="195" y="80" width="330" height="80" rx="6" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="211" y="102" font-size="12" font-weight="500" fill="#E2E8F0" font-family="Arial">What is a variable?</text>
  <text x="211" y="120" font-size="11" fill="#94A3B8" font-family="Arial">A variable is a named container for storing a</text>
  <text x="211" y="136" font-size="11" fill="#94A3B8" font-family="Arial">value that can change during program execution.</text>
  <!-- Code snippet -->
  <rect x="195" y="175" width="330" height="74" rx="6" fill="#0F1B2A" stroke="#334155" stroke-width="1"/>
  <text x="211" y="197" font-size="11" fill="#475569" font-family="monospace">// Declare with let</text>
  <text x="211" y="215" font-size="11" fill="#38BDF8" font-family="monospace">let</text>
  <text x="237" y="215" font-size="11" fill="#E2E8F0" font-family="monospace"> name = </text>
  <text x="305" y="215" font-size="11" fill="#4ADE80" font-family="monospace">"Alice"</text>
  <text x="211" y="233" font-size="11" fill="#38BDF8" font-family="monospace">const</text>
  <text x="245" y="233" font-size="11" fill="#E2E8F0" font-family="monospace"> PI = </text>
  <text x="285" y="233" font-size="11" fill="#FB923C" font-family="monospace">3.14</text>
  <!-- Textbook ref -->
  <rect x="195" y="262" width="330" height="36" rx="5" fill="#1E2D3D" stroke="#263246" stroke-width="1"/>
  <text x="211" y="283" font-size="11" fill="#475569" font-family="Arial">Eloquent JS p.6: "A variable is a box for storing values..."</text>
  <!-- Nav arrows -->
  <rect x="195" y="460" width="80" height="28" rx="5" fill="#263246"/>
  <text x="235" y="478" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">← Prev</text>
  <rect x="430" y="460" width="80" height="28" rx="5" fill="#263246"/>
  <text x="470" y="478" font-size="11" fill="#E2E8F0" font-family="Arial" text-anchor="middle">Next →</text>
  <!-- Right panel: tools -->
  <rect x="545" y="0" width="275" height="500" fill="#162032"/>
  <text x="562" y="28" font-size="11" font-weight="600" fill="#94A3B8" font-family="Arial">Section tools</text>
  <!-- Tabs -->
  <rect x="555" y="40" width="56" height="24" rx="4" fill="#1E3A5F"/>
  <text x="583" y="56" font-size="11" fill="#E2E8F0" font-family="Arial" text-anchor="middle">Notes</text>
  <text x="640" y="56" font-size="11" fill="#475569" font-family="Arial">Takeaways</text>
  <text x="710" y="56" font-size="11" fill="#475569" font-family="Arial">Exercises</text>
  <!-- Notes tool -->
  <rect x="555" y="76" width="248" height="200" rx="6" fill="#1A2433" stroke="#263246" stroke-width="1"/>
  <text x="569" y="98" font-size="11" fill="#475569" font-family="Arial">Your notes for this section</text>
  <text x="569" y="118" font-size="11" fill="#334155" font-family="Arial">Start typing...</text>
  <!-- Flashcards -->
  <rect x="555" y="292" width="248" height="90" rx="6" fill="#1A2433" stroke="#263246" stroke-width="1"/>
  <text x="569" y="312" font-size="11" fill="#475569" font-family="Arial">Flashcards</text>
  <rect x="569" y="322" width="218" height="44" rx="5" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="678" y="347" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">What does const prevent?</text>
  <!-- Key concepts -->
  <text x="562" y="410" font-size="11" fill="#475569" font-family="Arial">Key concepts in this section</text>
  <rect x="555" y="420" width="60" height="22" rx="4" fill="#1E3A5F"/>
  <text x="585" y="435" font-size="10" fill="#94A3B8" font-family="Arial" text-anchor="middle">variables</text>
  <rect x="624" y="420" width="56" height="22" rx="4" fill="#1E3A5F"/>
  <text x="652" y="435" font-size="10" fill="#94A3B8" font-family="Arial" text-anchor="middle">let/const</text>
  <rect x="689" y="420" width="48" height="22" rx="4" fill="#1E3A5F"/>
  <text x="713" y="435" font-size="10" fill="#94A3B8" font-family="Arial" text-anchor="middle">scope</text>
</svg>`
  },
  {
    label: "Add exercise: choose format",
    action: 'User action',
    desc: 'User clicks the Exercises tab, then "Add exercise." A format picker appears. They select Coding Sandbox.',
    title: "luminent.app · 1.1 Exercises",
    svg: `<svg class="scene" viewBox="0 0 820 480" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="480" fill="#1E293B"/>
  <rect x="0" y="0" width="175" height="480" fill="#162032"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="50" font-size="10" fill="#475569" font-family="Arial">Intro to JavaScript</text>
  <text x="12" y="72" font-size="10" fill="#334155" font-family="Arial" letter-spacing="1">1.1 VARIABLES</text>
  <rect x="10" y="82" width="155" height="26" rx="4" fill="#1E2D3D"/>
  <text x="20" y="99" font-size="11" fill="#64748B" font-family="Arial">Intro to Variables</text>
  <text x="20" y="126" font-size="11" fill="#64748B" font-family="Arial">let and const</text>
  <text x="20" y="150" font-size="11" fill="#64748B" font-family="Arial">var vs let vs const</text>
  <text x="20" y="174" font-size="11" fill="#64748B" font-family="Arial">Data Types</text>
  <text x="20" y="198" font-size="11" fill="#64748B" font-family="Arial">Summary</text>
  <!-- Right panel active on exercises tab -->
  <rect x="175" y="0" width="645" height="480" fill="#1A2433"/>
  <text x="195" y="36" font-size="13" font-weight="600" fill="#E2E8F0" font-family="Arial">Exercises · 1.1 Variables</text>
  <!-- Tabs -->
  <text x="195" y="62" font-size="11" fill="#475569" font-family="Arial">Notes</text>
  <text x="248" y="62" font-size="11" fill="#475569" font-family="Arial">Takeaways</text>
  <rect x="316" y="50" width="74" height="22" rx="4" fill="#1E3A5F"/>
  <text x="353" y="65" font-size="11" fill="#E2E8F0" font-family="Arial" text-anchor="middle">Exercises</text>
  <line x1="195" y1="74" x2="800" y2="74" stroke="#263246" stroke-width="1"/>
  <!-- Empty exercises state -->
  <text x="195" y="102" font-size="12" fill="#475569" font-family="Arial">No exercises yet for this section.</text>
  <!-- Format picker modal -->
  <rect x="195" y="120" width="590" height="310" rx="10" fill="#162032" stroke="#4682B4" stroke-width="1.5"/>
  <text x="410" y="148" font-size="13" font-weight="600" fill="#E2E8F0" font-family="Arial" text-anchor="middle">Choose exercise format</text>
  <text x="410" y="166" font-size="11" fill="#475569" font-family="Arial" text-anchor="middle">Select a format. Luminent will generate the exercise from your section materials.</text>
  <!-- Format cards: 2x2 -->
  <!-- Multiple choice -->
  <rect x="215" y="180" width="170" height="90" rx="8" fill="#1A2433" stroke="#334155" stroke-width="1"/>
  <text x="300" y="212" font-size="22" fill="#64748B" font-family="Arial" text-anchor="middle">☑</text>
  <text x="300" y="238" font-size="12" fill="#94A3B8" font-family="Arial" text-anchor="middle">Multiple choice</text>
  <text x="300" y="256" font-size="10" fill="#475569" font-family="Arial" text-anchor="middle">auto-checked</text>
  <!-- Written -->
  <rect x="400" y="180" width="170" height="90" rx="8" fill="#1A2433" stroke="#334155" stroke-width="1"/>
  <text x="485" y="212" font-size="22" fill="#64748B" font-family="Arial" text-anchor="middle">✏</text>
  <text x="485" y="238" font-size="12" fill="#94A3B8" font-family="Arial" text-anchor="middle">Written response</text>
  <text x="485" y="256" font-size="10" fill="#475569" font-family="Arial" text-anchor="middle">reviewed</text>
  <!-- Coding sandbox (selected) -->
  <rect x="215" y="284" width="170" height="90" rx="8" fill="#1E3A5F" stroke="#4682B4" stroke-width="2"/>
  <text x="300" y="316" font-size="22" fill="#38BDF8" font-family="Arial" text-anchor="middle">&lt;/&gt;</text>
  <text x="300" y="342" font-size="12" font-weight="500" fill="#E2E8F0" font-family="Arial" text-anchor="middle">Coding sandbox</text>
  <text x="300" y="360" font-size="10" fill="#38BDF8" font-family="Arial" text-anchor="middle">auto-checked ✓</text>
  <!-- Fill in blank -->
  <rect x="400" y="284" width="170" height="90" rx="8" fill="#1A2433" stroke="#334155" stroke-width="1"/>
  <text x="485" y="316" font-size="22" fill="#64748B" font-family="Arial" text-anchor="middle">_ _</text>
  <text x="485" y="342" font-size="12" fill="#94A3B8" font-family="Arial" text-anchor="middle">Fill in the blank</text>
  <text x="485" y="360" font-size="10" fill="#475569" font-family="Arial" text-anchor="middle">auto-checked</text>
  <!-- Next button -->
  <rect x="630" y="392" width="135" height="34" rx="7" fill="#4682B4"/>
  <text x="697" y="413" font-size="12" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">Continue →</text>
</svg>`
  },
  {
    label: "Prompt Luminent: define what to generate",
    action: 'User action',
    desc: 'After choosing Coding Sandbox, a prompt field appears. User types what the exercise should cover and hits Generate.',
    title: "luminent.app · create coding exercise",
    svg: `<svg class="scene" viewBox="0 0 820 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="420" fill="#1E293B"/>
  <rect x="0" y="0" width="175" height="420" fill="#162032"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="50" font-size="10" fill="#475569" font-family="Arial">1.1 Variables · Exercises</text>
  <!-- Main -->
  <rect x="175" y="0" width="645" height="420" fill="#1A2433"/>
  <text x="195" y="40" font-size="13" font-weight="600" fill="#E2E8F0" font-family="Arial">New coding exercise · 1.1 Variables</text>
  <line x1="195" y1="52" x2="800" y2="52" stroke="#263246" stroke-width="1"/>
  <!-- Prompt card -->
  <rect x="195" y="68" width="590" height="220" rx="10" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="213" y="94" font-size="12" font-weight="500" fill="#E2E8F0" font-family="Arial">Describe what this exercise should cover</text>
  <text x="213" y="112" font-size="11" fill="#475569" font-family="Arial">Luminent will generate the problem, starter code, and test cases from your section materials.</text>
  <!-- Text area -->
  <rect x="213" y="126" width="554" height="80" rx="6" fill="#1A2433" stroke="#4682B4" stroke-width="1.5"/>
  <text x="227" y="148" font-size="12" fill="#E2E8F0" font-family="Arial">Define variables using let, const, and var. Include examples</text>
  <text x="227" y="166" font-size="12" fill="#E2E8F0" font-family="Arial">of reassigning let, and show that const cannot be changed.</text>
  <!-- Cursor -->
  <rect x="227" y="170" width="1.5" height="14" fill="#38BDF8"/>
  <!-- Options row -->
  <text x="213" y="228" font-size="11" fill="#64748B" font-family="Arial">Difficulty:</text>
  <rect x="272" y="214" width="78" height="22" rx="4" fill="#1E3A5F"/>
  <text x="311" y="229" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">Foundational</text>
  <text x="366" y="228" font-size="11" fill="#64748B" font-family="Arial">Format:</text>
  <rect x="410" y="214" width="100" height="22" rx="4" fill="#1E3A5F"/>
  <text x="460" y="229" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">write from scratch</text>
  <!-- Coherence badge -->
  <rect x="213" y="250" width="554" height="24" rx="5" fill="#1E2D3D" stroke="#263246" stroke-width="1"/>
  <text x="230" y="266" font-size="11" fill="#475569" font-family="Arial">Generated only from: week1_slides.pdf + Eloquent JavaScript ch.1</text>
  <!-- Generate button -->
  <rect x="637" y="308" width="148" height="38" rx="7" fill="#4682B4"/>
  <text x="711" y="331" font-size="13" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">Generate ↗</text>
  <text x="195" y="332" font-size="11" fill="#334155" font-family="Arial">Luminent will generate the problem statement, starter code, hidden test cases, and two hint levels.</text>
</svg>`
  },
  {
    label: "Generated coding exercise: the sandbox",
    action: 'Luminent response',
    desc: 'The exercise is ready. Left: problem prompt with hints locked until needed. Right: Monaco-style editor with starter code. Test cases run on submit.',
    title: "luminent.app · exercise: Variables",
    svg: `<svg class="scene" viewBox="0 0 820 520" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="520" fill="#1E293B"/>
  <!-- Left panel: problem -->
  <rect x="0" y="0" width="340" height="520" fill="#162032"/>
  <rect x="0" y="0" width="340" height="42" fill="#0F1B2A" stroke="#334155" stroke-width="0" />
  <line x1="0" y1="42" x2="340" y2="42" stroke="#334155" stroke-width="1"/>
  <text x="16" y="27" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="200" y="27" font-size="10" fill="#475569" font-family="Arial">1.1 Variables · Exercise 1</text>
  <!-- Problem label -->
  <rect x="14" y="56" width="56" height="18" rx="4" fill="#1E3A5F"/>
  <text x="42" y="69" font-size="10" fill="#38BDF8" font-family="Arial" text-anchor="middle">Coding</text>
  <rect x="78" y="56" width="90" height="18" rx="4" fill="#162032" stroke="#263246" stroke-width="1"/>
  <text x="123" y="69" font-size="10" fill="#475569" font-family="Arial" text-anchor="middle">Foundational</text>
  <!-- Problem statement -->
  <text x="16" y="98" font-size="13" font-weight="600" fill="#E2E8F0" font-family="Arial">Defining variables</text>
  <text x="16" y="118" font-size="12" fill="#94A3B8" font-family="Arial">Declare three variables:</text>
  <!-- Bullet points -->
  <circle cx="24" cy="137" r="2.5" fill="#38BDF8"/>
  <text x="34" y="141" font-size="12" fill="#94A3B8" font-family="Arial">A let variable called name, set to your name</text>
  <circle cx="24" cy="159" r="2.5" fill="#38BDF8"/>
  <text x="34" y="163" font-size="12" fill="#94A3B8" font-family="Arial">A const called PI, set to 3.14159</text>
  <circle cx="24" cy="181" r="2.5" fill="#38BDF8"/>
  <text x="34" y="185" font-size="12" fill="#94A3B8" font-family="Arial">A var called score, set to 0</text>
  <text x="16" y="210" font-size="12" fill="#94A3B8" font-family="Arial">Then reassign name to a different value.</text>
  <text x="16" y="230" font-size="12" fill="#94A3B8" font-family="Arial">Try reassigning PI · what happens?</text>
  <line x1="14" y1="244" x2="324" y2="244" stroke="#263246" stroke-width="1"/>
  <!-- Hints (locked) -->
  <text x="16" y="268" font-size="11" fill="#475569" font-family="Arial">Hints</text>
  <rect x="14" y="278" width="310" height="30" rx="5" fill="#1A2433" stroke="#263246" stroke-width="1"/>
  <text x="29" y="297" font-size="11" fill="#334155" font-family="Arial">🔒  Hint 1 · unlocks after first attempt</text>
  <rect x="14" y="316" width="310" height="30" rx="5" fill="#1A2433" stroke="#263246" stroke-width="1"/>
  <text x="29" y="335" font-size="11" fill="#334155" font-family="Arial">🔒  Hint 2 · unlocks after second attempt</text>
  <!-- Source -->
  <rect x="14" y="440" width="310" height="28" rx="5" fill="#162032" stroke="#263246" stroke-width="1"/>
  <text x="28" y="458" font-size="10" fill="#334155" font-family="Arial">Source: week1_slides.pdf + Eloquent JavaScript ch.1</text>
  <!-- Test cases summary -->
  <text x="16" y="494" font-size="11" fill="#334155" font-family="Arial">3 hidden test cases · run on submit</text>
  <!-- Right panel: editor -->
  <rect x="340" y="0" width="480" height="520" fill="#0D1117"/>
  <!-- Editor top bar -->
  <rect x="340" y="0" width="480" height="36" fill="#0F1B2A"/>
  <text x="356" y="23" font-size="11" fill="#475569" font-family="monospace">script.js</text>
  <rect x="730" y="8" width="72" height="22" rx="4" fill="#4682B4"/>
  <text x="766" y="23" font-size="11" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">▶ Run</text>
  <!-- Code -->
  <text x="360" y="68" font-size="12" fill="#475569" font-family="monospace">// Define your variables below</text>
  <text x="360" y="90" font-size="12" fill="#64748B" font-family="monospace">// Starter code · fill in the values</text>
  <text x="360" y="114" font-size="12" fill="#38BDF8" font-family="monospace">let</text>
  <text x="390" y="114" font-size="12" fill="#E2E8F0" font-family="monospace"> name = </text>
  <text x="464" y="114" font-size="12" fill="#4ADE80" font-family="monospace">"___"</text>
  <text x="360" y="136" font-size="12" fill="#38BDF8" font-family="monospace">const</text>
  <text x="400" y="136" font-size="12" fill="#E2E8F0" font-family="monospace"> PI = ___</text>
  <text x="360" y="158" font-size="12" fill="#38BDF8" font-family="monospace">var</text>
  <text x="388" y="158" font-size="12" fill="#E2E8F0" font-family="monospace"> score = ___</text>
  <rect x="356" y="168" width="1.5" height="14" fill="#38BDF8"/>
  <text x="360" y="202" font-size="12" fill="#475569" font-family="monospace">// Reassign name</text>
  <text x="360" y="224" font-size="12" fill="#E2E8F0" font-family="monospace">name = </text>
  <text x="420" y="224" font-size="12" fill="#4ADE80" font-family="monospace">"___"</text>
  <text x="360" y="258" font-size="12" fill="#475569" font-family="monospace">// Try reassigning PI</text>
  <text x="360" y="280" font-size="12" fill="#E24B4A" font-family="monospace">// PI = 3  ← what happens?</text>
  <!-- Output panel -->
  <line x1="340" y1="380" x2="820" y2="380" stroke="#263246" stroke-width="1"/>
  <rect x="340" y="380" width="480" height="140" fill="#090E17"/>
  <text x="356" y="400" font-size="10" fill="#475569" font-family="monospace">OUTPUT</text>
  <text x="356" y="420" font-size="11" fill="#334155" font-family="monospace">Run your code to see output here.</text>
  <!-- Submit -->
  <rect x="618" y="472" width="176" height="34" rx="7" fill="#162032" stroke="#4682B4" stroke-width="1.5"/>
  <text x="706" y="493" font-size="12" font-weight="500" fill="#38BDF8" font-family="Arial" text-anchor="middle">Submit for grading</text>
</svg>`
  }
  ,{
    label: "Analysis: teacher + student view",
    action: 'Luminent response',
    desc: 'After students complete the exercise, two separate views are generated: the teacher (top) sees class-wide analysis; the student (bottom) sees personal feedback.',
    title: "luminent.app · 1.1 Analysis",
    views: [
      {
        title: "luminent.app · 1.1 Analysis · Teacher",
        svg: `<svg class="scene" viewBox="0 0 820 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="420" fill="#1E293B"/>
  <rect x="0" y="0" width="175" height="420" fill="#162032"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="50" font-size="10" fill="#475569" font-family="Arial">1.1 Variables</text>
  <rect x="10" y="62" width="155" height="22" rx="4" fill="#1E3A5F"/>
  <text x="20" y="77" font-size="11" fill="#E2E8F0" font-family="Arial">Analysis</text>
  <text x="20" y="106" font-size="11" fill="#64748B" font-family="Arial">Lesson</text>
  <text x="20" y="130" font-size="11" fill="#64748B" font-family="Arial">Exercises</text>
  <!-- TEACHER SECTION -->
  <rect x="185" y="8" width="620" height="22" rx="4" fill="#1E2D3D"/>
  <text x="196" y="23" font-size="10" font-weight="600" fill="#475569" font-family="Arial" letter-spacing="1">TEACHER VIEW · CLASS ANALYSIS</text>
  <!-- Stats row -->
  <rect x="185" y="36" width="138" height="54" rx="6" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="254" y="56" font-size="10" fill="#64748B" font-family="Arial" text-anchor="middle">Completion</text>
  <text x="254" y="78" font-size="20" font-weight="600" fill="#E2E8F0" font-family="Arial" text-anchor="middle">87%</text>
  <rect x="333" y="36" width="138" height="54" rx="6" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="402" y="56" font-size="10" fill="#64748B" font-family="Arial" text-anchor="middle">Avg attempts</text>
  <text x="402" y="78" font-size="20" font-weight="600" fill="#E2E8F0" font-family="Arial" text-anchor="middle">2.4</text>
  <rect x="481" y="36" width="138" height="54" rx="6" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="550" y="56" font-size="10" fill="#64748B" font-family="Arial" text-anchor="middle">Avg score</text>
  <text x="550" y="78" font-size="20" font-weight="600" fill="#4ADE80" font-family="Arial" text-anchor="middle">71%</text>
  <rect x="629" y="36" width="176" height="54" rx="6" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="717" y="56" font-size="10" fill="#64748B" font-family="Arial" text-anchor="middle">Struggled most</text>
  <text x="717" y="78" font-size="13" font-weight="500" fill="#FB923C" font-family="Arial" text-anchor="middle">const reassignment</text>
  <!-- Concept heatmap -->
  <text x="185" y="112" font-size="11" fill="#475569" font-family="Arial">Concept confidence · class average</text>
  <text x="185" y="130" font-size="11" fill="#64748B" font-family="Arial">let declaration</text>
  <rect x="310" y="118" width="200" height="14" rx="3" fill="#263246"/>
  <rect x="310" y="118" width="176" height="14" rx="3" fill="#4ADE80" opacity="0.7"/>
  <text x="518" y="130" font-size="10" fill="#4ADE80" font-family="Arial">88%</text>
  <text x="185" y="152" font-size="11" fill="#64748B" font-family="Arial">const usage</text>
  <rect x="310" y="140" width="200" height="14" rx="3" fill="#263246"/>
  <rect x="310" y="140" width="130" height="14" rx="3" fill="#FBBF24" opacity="0.7"/>
  <text x="518" y="152" font-size="10" fill="#FBBF24" font-family="Arial">65%</text>
  <text x="185" y="174" font-size="11" fill="#64748B" font-family="Arial">var vs let scope</text>
  <rect x="310" y="162" width="200" height="14" rx="3" fill="#263246"/>
  <rect x="310" y="162" width="90" height="14" rx="3" fill="#F87171" opacity="0.7"/>
  <text x="518" y="174" font-size="10" fill="#F87171" font-family="Arial">45%</text>
  <text x="185" y="196" font-size="11" fill="#64748B" font-family="Arial">const reassignment</text>
  <rect x="310" y="184" width="200" height="14" rx="3" fill="#263246"/>
  <rect x="310" y="184" width="62" height="14" rx="3" fill="#F87171" opacity="0.8"/>
  <text x="518" y="196" font-size="10" fill="#F87171" font-family="Arial">31%</text>
  <!-- Qualitative summary -->
  <rect x="185" y="210" width="420" height="68" rx="6" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="199" y="230" font-size="11" font-weight="500" fill="#E2E8F0" font-family="Arial">What Luminent observed</text>
  <text x="199" y="248" font-size="11" fill="#94A3B8" font-family="Arial">Most students declared let correctly but confused const</text>
  <text x="199" y="264" font-size="11" fill="#94A3B8" font-family="Arial">immutability with variable naming. var scope was skipped.</text>
  <!-- Suggestion block -->
  <rect x="615" y="210" width="190" height="68" rx="6" fill="#1E3A5F" stroke="#4682B4" stroke-width="1.5"/>
  <text x="625" y="230" font-size="11" font-weight="500" fill="#E2E8F0" font-family="Arial">Suggested next action</text>
  <text x="625" y="248" font-size="11" fill="#94A3B8" font-family="Arial">Re-teach const and var</text>
  <text x="625" y="264" font-size="11" fill="#94A3B8" font-family="Arial">scope before Unit 2.</text>
  <!-- Generate exercises CTA -->
  <rect x="185" y="288" width="260" height="32" rx="6" fill="#4682B4"/>
  <text x="315" y="308" font-size="12" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">Generate re-teaching exercises ↗</text>
</svg>`
      },
      {
        title: "luminent.app · 1.1 Analysis · Student",
        svg: `<svg class="scene" viewBox="0 0 820 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="420" fill="#1E293B"/>
  <rect x="0" y="0" width="175" height="420" fill="#162032"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="50" font-size="10" fill="#475569" font-family="Arial">1.1 Variables</text>
  <rect x="10" y="62" width="155" height="22" rx="4" fill="#1E3A5F"/>
  <text x="20" y="77" font-size="11" fill="#E2E8F0" font-family="Arial">Analysis</text>
  <text x="20" y="106" font-size="11" fill="#64748B" font-family="Arial">Lesson</text>
  <text x="20" y="130" font-size="11" fill="#64748B" font-family="Arial">Exercises</text>
  <!-- STUDENT SECTION -->
  <rect x="185" y="8" width="620" height="22" rx="4" fill="#1E2D3D"/>
  <text x="196" y="23" font-size="10" font-weight="600" fill="#475569" font-family="Arial" letter-spacing="1">STUDENT VIEW · PERSONAL FEEDBACK</text>
  <!-- Student stats -->
  <rect x="185" y="38" width="138" height="54" rx="6" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="254" y="58" font-size="10" fill="#64748B" font-family="Arial" text-anchor="middle">Your score</text>
  <text x="254" y="80" font-size="20" font-weight="600" fill="#FBBF24" font-family="Arial" text-anchor="middle">64%</text>
  <rect x="333" y="38" width="138" height="54" rx="6" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="402" y="58" font-size="10" fill="#64748B" font-family="Arial" text-anchor="middle">Attempts</text>
  <text x="402" y="80" font-size="20" font-weight="600" fill="#E2E8F0" font-family="Arial" text-anchor="middle">3</text>
  <rect x="481" y="38" width="324" height="54" rx="6" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="550" y="58" font-size="10" fill="#64748B" font-family="Arial" text-anchor="middle">Where to focus</text>
  <text x="643" y="80" font-size="13" font-weight="500" fill="#FB923C" font-family="Arial" text-anchor="middle">const reassignment + var scope</text>
  <!-- Student concept bars -->
  <text x="185" y="114" font-size="11" fill="#475569" font-family="Arial">Your concept breakdown</text>
  <text x="185" y="132" font-size="11" fill="#64748B" font-family="Arial">let declaration</text>
  <rect x="310" y="120" width="200" height="14" rx="3" fill="#263246"/>
  <rect x="310" y="120" width="184" height="14" rx="3" fill="#4ADE80" opacity="0.7"/>
  <text x="518" y="132" font-size="10" fill="#4ADE80" font-family="Arial">92%</text>
  <text x="185" y="154" font-size="11" fill="#64748B" font-family="Arial">const usage</text>
  <rect x="310" y="142" width="200" height="14" rx="3" fill="#263246"/>
  <rect x="310" y="142" width="96" height="14" rx="3" fill="#FBBF24" opacity="0.7"/>
  <text x="518" y="154" font-size="10" fill="#FBBF24" font-family="Arial">48%</text>
  <text x="185" y="176" font-size="11" fill="#64748B" font-family="Arial">var scope</text>
  <rect x="310" y="164" width="200" height="14" rx="3" fill="#263246"/>
  <rect x="310" y="164" width="50" height="14" rx="3" fill="#F87171" opacity="0.8"/>
  <text x="518" y="176" font-size="10" fill="#F87171" font-family="Arial">25%</text>
  <!-- Personal qualitative note -->
  <rect x="185" y="188" width="420" height="52" rx="6" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="199" y="208" font-size="11" font-weight="500" fill="#E2E8F0" font-family="Arial">Luminent noticed</text>
  <text x="199" y="226" font-size="11" fill="#94A3B8" font-family="Arial">You passed let quickly but slowed on const · tried to reassign it twice.</text>
  <!-- More practice prompt -->
  <rect x="615" y="188" width="190" height="52" rx="6" fill="#1E3A5F" stroke="#4682B4" stroke-width="1.5"/>
  <text x="710" y="208" font-size="11" font-weight="500" fill="#E2E8F0" font-family="Arial" text-anchor="middle">Want more practice on</text>
  <text x="710" y="224" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">what to improve?</text>
  <rect x="625" y="230" width="170" height="26" rx="5" fill="#4682B4"/>
  <text x="710" y="247" font-size="11" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">Yes, practice these gaps →</text>
</svg>`
      }
    ]
  },
  {
    label: "Teacher prompts re-teaching exercises",
    action: 'User action',
    desc: 'Teacher clicks generate from the suggestion block. A prompt appears pre-filled with what Luminent identified. Teacher confirms.',
    title: "luminent.app · generate re-teaching exercises",
    svg: `<svg class="scene" viewBox="0 0 820 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="420" fill="#1E293B"/>
  <rect x="0" y="0" width="175" height="420" fill="#162032"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="50" font-size="10" fill="#475569" font-family="Arial">1.1 Variables · Analysis</text>
  <rect x="175" y="0" width="645" height="420" fill="#1A2433"/>
  <text x="195" y="40" font-size="13" font-weight="600" fill="#E2E8F0" font-family="Arial">Generate re-teaching exercises</text>
  <line x1="195" y1="52" x2="800" y2="52" stroke="#263246" stroke-width="1"/>
  <!-- Context badge -->
  <rect x="195" y="64" width="590" height="28" rx="5" fill="#1E2D3D" stroke="#263246" stroke-width="1"/>
  <text x="211" y="82" font-size="11" fill="#475569" font-family="Arial">Based on analysis of 1.1 Variables · 24 students · completed yesterday</text>
  <!-- Prompt area -->
  <rect x="195" y="104" width="590" height="148" rx="8" fill="#162032" stroke="#334155" stroke-width="1"/>
  <text x="211" y="126" font-size="12" font-weight="500" fill="#E2E8F0" font-family="Arial">What Luminent pre-filled from analysis</text>
  <rect x="211" y="136" width="558" height="100" rx="5" fill="#1A2433" stroke="#4682B4" stroke-width="1.5"/>
  <text x="225" y="158" font-size="12" fill="#E2E8F0" font-family="Arial">Focus on const immutability · students confused reassignment</text>
  <text x="225" y="176" font-size="12" fill="#E2E8F0" font-family="Arial">with redeclaration. Include a fix-the-bug exercise showing a</text>
  <text x="225" y="194" font-size="12" fill="#E2E8F0" font-family="Arial">TypeError from reassigning const, and a var vs let scope</text>
  <text x="225" y="212" font-size="12" fill="#E2E8F0" font-family="Arial">comparison exercise with block scope demonstration.</text>
  <rect x="757" y="218" width="1.5" height="14" fill="#38BDF8"/>
  <!-- Options -->
  <text x="195" y="278" font-size="11" fill="#64748B" font-family="Arial">Format:</text>
  <rect x="242" y="264" width="100" height="22" rx="4" fill="#1E3A5F"/>
  <text x="292" y="279" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">Coding sandbox</text>
  <text x="352" y="278" font-size="11" fill="#64748B" font-family="Arial">Count:</text>
  <rect x="392" y="264" width="60" height="22" rx="4" fill="#1E3A5F"/>
  <text x="422" y="279" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">2 exercises</text>
  <text x="462" y="278" font-size="11" fill="#64748B" font-family="Arial">Placed:</text>
  <rect x="508" y="264" width="130" height="22" rx="4" fill="#1E3A5F"/>
  <text x="573" y="279" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">end of section 1.1</text>
  <!-- Coherence badge -->
  <rect x="195" y="298" width="590" height="24" rx="5" fill="#1E2D3D" stroke="#263246" stroke-width="1"/>
  <text x="211" y="314" font-size="11" fill="#475569" font-family="Arial">Generated from: week1_slides.pdf + Eloquent JavaScript ch.1 · same source as original lesson</text>
  <!-- Generate button -->
  <rect x="637" y="346" width="148" height="38" rx="7" fill="#4682B4"/>
  <text x="711" y="369" font-size="13" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">Generate ↗</text>
  <text x="195" y="370" font-size="11" fill="#334155" font-family="Arial">Exercises will be appended to section 1.1 and flagged as re-teaching material.</text>
</svg>`
  },
  {
    label: "Re-teaching exercises appended",
    action: 'Luminent response',
    desc: 'Two new exercises appear at the bottom of the exercises tab, labeled as generated from analysis. The original exercise is unchanged above.',
    title: "luminent.app · 1.1 Exercises",
    svg: `<svg class="scene" viewBox="0 0 820 560" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="560" fill="#1E293B"/>
  <rect x="0" y="0" width="175" height="560" fill="#162032"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="50" font-size="10" fill="#475569" font-family="Arial">1.1 Variables</text>
  <rect x="10" y="62" width="155" height="22" rx="4" fill="#1E2D3D"/>
  <text x="20" y="77" font-size="11" fill="#64748B" font-family="Arial">Lesson</text>
  <rect x="10" y="90" width="155" height="22" rx="4" fill="#1E3A5F"/>
  <text x="20" y="105" font-size="11" fill="#E2E8F0" font-family="Arial">Exercises</text>
  <text x="20" y="134" font-size="11" fill="#64748B" font-family="Arial">Analysis</text>
  <!-- Main -->
  <rect x="175" y="0" width="645" height="560" fill="#1A2433"/>
  <text x="195" y="36" font-size="13" font-weight="600" fill="#E2E8F0" font-family="Arial">Exercises · 1.1 Variables</text>
  <text x="195" y="54" font-size="11" fill="#475569" font-family="Arial">3 exercises · 2 re-teaching</text>
  <line x1="195" y1="64" x2="800" y2="64" stroke="#263246" stroke-width="1"/>
  <!-- Original exercise card -->
  <rect x="195" y="76" width="590" height="72" rx="7" fill="#162032" stroke="#334155" stroke-width="1"/>
  <rect x="195" y="76" width="4" height="72" rx="2" fill="#4682B4"/>
  <text x="214" y="98" font-size="12" font-weight="500" fill="#E2E8F0" font-family="Arial">Exercise 1 · Defining variables</text>
  <text x="214" y="116" font-size="11" fill="#64748B" font-family="Arial">Coding sandbox · Foundational · 3 test cases</text>
  <rect x="610" y="90" width="60" height="20" rx="4" fill="#1E3A5F"/>
  <text x="640" y="104" font-size="10" fill="#94A3B8" font-family="Arial" text-anchor="middle">Original</text>
  <rect x="680" y="88" width="88" height="24" rx="5" fill="#263246"/>
  <text x="724" y="104" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">Open →</text>
  <!-- Re-teaching label -->
  <text x="195" y="172" font-size="10" font-weight="600" fill="#FB923C" font-family="Arial" letter-spacing="1">GENERATED FROM ANALYSIS · RE-TEACHING</text>
  <line x1="195" y1="180" x2="780" y2="180" stroke="#FB923C" stroke-width="0.5" opacity="0.4"/>
  <!-- Re-teaching exercise 2 -->
  <rect x="195" y="188" width="590" height="84" rx="7" fill="#162032" stroke="#FB923C" stroke-width="1" opacity="0.8"/>
  <rect x="195" y="188" width="4" height="84" rx="2" fill="#FB923C"/>
  <text x="214" y="210" font-size="12" font-weight="500" fill="#E2E8F0" font-family="Arial">Exercise 2 · Fix the bug: const reassignment</text>
  <text x="214" y="228" font-size="11" fill="#64748B" font-family="Arial">Coding sandbox · Fix-the-bug format · targets TypeError</text>
  <text x="214" y="248" font-size="11" fill="#94A3B8" font-family="Arial">Broken code provided. Student identifies why const fails and rewrites.</text>
  <rect x="680" y="200" width="88" height="24" rx="5" fill="#263246"/>
  <text x="724" y="216" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">Open →</text>
  <!-- Re-teaching exercise 3 -->
  <rect x="195" y="284" width="590" height="84" rx="7" fill="#162032" stroke="#FB923C" stroke-width="1" opacity="0.8"/>
  <rect x="195" y="284" width="4" height="84" rx="2" fill="#FB923C"/>
  <text x="214" y="306" font-size="12" font-weight="500" fill="#E2E8F0" font-family="Arial">Exercise 3 · var vs let: block scope</text>
  <text x="214" y="324" font-size="11" fill="#64748B" font-family="Arial">Coding sandbox · Write from scratch · scope comparison</text>
  <text x="214" y="344" font-size="11" fill="#94A3B8" font-family="Arial">Write two functions: one using var, one using let. Observe scope difference.</text>
  <rect x="680" y="296" width="88" height="24" rx="5" fill="#263246"/>
  <text x="724" y="312" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">Open →</text>
  <!-- Footer note -->
  <rect x="195" y="388" width="590" height="28" rx="5" fill="#1E2D3D" stroke="#263246" stroke-width="1"/>
  <text x="211" y="406" font-size="11" fill="#475569" font-family="Arial">Re-teaching exercises generated from analysis · appended 2 min ago · source-grounded</text>
</svg>`
  },
  {
    label: "Slideshow mode: present to class",
    action: 'User action + Luminent response',
    desc: 'Teacher clicks Present on the lesson page. The UI collapses to full-screen slideshow mode. One concept per slide, presentation view, keyboard navigable.',
    title: "luminent.app · slideshow: 1.1 Variables",
    svg: `<svg class="scene" viewBox="0 0 820 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="500" fill="#0A0F1A"/>
  <!-- Top bar -->
  <rect x="0" y="0" width="820" height="38" fill="#0F172A"/>
  <text x="20" y="24" font-size="11" fill="#475569" font-family="Arial">← Exit slideshow</text>
  <line x1="140" y1="8" x2="140" y2="30" stroke="#1E293B" stroke-width="1"/>
  <text x="156" y="24" font-size="11" fill="#334155" font-family="Arial">1.1 Variables · Intro to JavaScript</text>
  <text x="800" y="24" font-size="11" fill="#475569" font-family="Arial" text-anchor="end">1 / 6</text>
  <!-- Slide frame · white card centered -->
  <rect x="60" y="52" width="700" height="392" rx="6" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
  <!-- Slide top accent bar -->
  <rect x="60" y="52" width="700" height="5" rx="3" fill="#4682B4"/>
  <!-- Slide content -->
  <!-- Eyebrow label -->
  <text x="410" y="108" font-size="10" font-weight="600" fill="#38BDF8" font-family="Arial" text-anchor="middle" letter-spacing="2"></text>
  <!-- Main heading -->
  <text x="410" y="158" font-size="28" font-weight="600" fill="#0F172A" font-family="Arial" text-anchor="middle">What is a variable?</text>
  <!-- Divider -->
  <line x1="330" y1="174" x2="490" y2="174" stroke="#E2E8F0" stroke-width="1.5"/>
  <!-- Body text -->
  <text x="410" y="204" font-size="13" fill="#475569" font-family="Arial" text-anchor="middle">A named container for a value that can change</text>
  <text x="410" y="222" font-size="13" fill="#475569" font-family="Arial" text-anchor="middle">during program execution.</text>
  <!-- Code block inside slide -->
  <rect x="210" y="242" width="400" height="112" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
  <text x="230" y="270" font-size="12" fill="#4682B4" font-family="monospace">let</text>
  <text x="254" y="270" font-size="12" fill="#1E293B" font-family="monospace"> name = </text>
  <text x="344" y="270" font-size="12" fill="#16A34A" font-family="monospace">"Alice"</text>
  <text x="230" y="294" font-size="12" fill="#4682B4" font-family="monospace">const</text>
  <text x="270" y="294" font-size="12" fill="#1E293B" font-family="monospace"> PI = </text>
  <text x="318" y="294" font-size="12" fill="#EA580C" font-family="monospace">3.14159</text>
  <text x="230" y="318" font-size="12" fill="#4682B4" font-family="monospace">var</text>
  <text x="254" y="318" font-size="12" fill="#1E293B" font-family="monospace"> score = </text>
  <text x="338" y="318" font-size="12" fill="#EA580C" font-family="monospace">0</text>
  <!-- Slide footer inside card -->
  <text x="410" y="424" font-size="10" fill="#CBD5E1" font-family="Arial" text-anchor="middle">week1_slides.pdf · Slide 3</text>
  <!-- Bottom nav · outside slide card -->
  <!-- Slide dots -->
  <circle cx="376" cy="466" r="5" fill="#4682B4"/>
  <circle cx="394" cy="466" r="4" fill="#1E293B"/>
  <circle cx="410" cy="466" r="4" fill="#1E293B"/>
  <circle cx="426" cy="466" r="4" fill="#1E293B"/>
  <circle cx="442" cy="466" r="4" fill="#1E293B"/>
  <circle cx="458" cy="466" r="4" fill="#1E293B"/>
  <!-- Left arrow -->
  <rect x="86" y="452" width="80" height="30" rx="6" fill="#1E293B" stroke="#334155" stroke-width="1"/>
  <text x="126" y="471" font-size="13" fill="#475569" font-family="Arial" text-anchor="middle">← Prev</text>
  <!-- Right arrow -->
  <rect x="654" y="452" width="80" height="30" rx="6" fill="#4682B4"/>
  <text x="694" y="471" font-size="13" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">Next →</text>
</svg>`}
];

const STUDENT_STEPS = [
  {
    label: "Join or create a classroom",
    action: 'Student action',
    desc: 'Student arrives at Luminent. They can join a teacher\'s course with a class code, or create their own private study space.',
    title: "luminent.app · welcome",
    svg: `<svg class="scene" viewBox="0 0 820 440" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="440" fill="#FAF8F5"/>
  <!-- Sidebar -->
  <rect x="0" y="0" width="210" height="440" fill="#F0EDE8"/>
  <text x="20" y="30" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="20" y="60" font-size="11" fill="#A8A29E" font-family="Arial">My spaces</text>
  <rect x="12" y="72" width="186" height="28" rx="5" fill="#DCE7F2"/>
  <text x="22" y="90" font-size="11" fill="#64748B" font-family="Arial">+ Join or create</text>
  <!-- Main content -->
  <text x="240" y="48" font-size="14" font-weight="600" fill="#1E293B" font-family="Arial">Welcome to Luminent</text>
  <text x="240" y="68" font-size="12" fill="#94A3B8" font-family="Arial">Join a class your teacher set up, or create your own study space.</text>
  <!-- Join card -->
  <rect x="240" y="90" width="255" height="310" rx="10" fill="#F0EDE8" stroke="#4682B4" stroke-width="1.5"/>
  <text x="367" y="150" font-size="30" fill="#4682B4" font-family="Arial" text-anchor="middle">#</text>
  <text x="367" y="182" font-size="13" font-weight="600" fill="#1E293B" font-family="Arial" text-anchor="middle">Join a class</text>
  <text x="367" y="202" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">Your teacher shared a code.</text>
  <text x="367" y="218" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">Enter it to access their</text>
  <text x="367" y="234" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">lessons and exercises.</text>
  <rect x="260" y="256" width="215" height="34" rx="6" fill="#FFFFFF" stroke="#4682B4" stroke-width="1.5"/>
  <text x="367" y="277" font-size="12" fill="#D4CFC8" font-family="Arial" text-anchor="middle">Enter class code...</text>
  <rect x="260" y="302" width="215" height="34" rx="6" fill="#4682B4"/>
  <text x="367" y="323" font-size="12" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">Join class</text>
  <!-- Or divider -->
  <text x="507" y="252" font-size="12" fill="#D4CFC8" font-family="Arial" text-anchor="middle">or</text>
  <!-- Create card -->
  <rect x="525" y="90" width="255" height="310" rx="10" fill="#F0EDE8" stroke="#D4CFC8" stroke-width="1"/>
  <text x="652" y="150" font-size="30" fill="#A8A29E" font-family="Arial" text-anchor="middle">⊞</text>
  <text x="652" y="182" font-size="13" font-weight="600" fill="#1E293B" font-family="Arial" text-anchor="middle">Create a space</text>
  <text x="652" y="202" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">Self-directed study.</text>
  <text x="652" y="218" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">Add your own materials</text>
  <text x="652" y="234" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">and Luminent builds from them.</text>
  <rect x="545" y="256" width="215" height="26" rx="5" fill="#EAE6E0" stroke="#DDD9D2" stroke-width="1"/>
  <text x="652" y="273" font-size="10" fill="#A8A29E" font-family="Arial" text-anchor="middle">Private · only you can see it</text>
  <rect x="545" y="296" width="215" height="34" rx="6" fill="#FAF8F5" stroke="#D4CFC8" stroke-width="1"/>
  <text x="652" y="317" font-size="12" fill="#64748B" font-family="Arial" text-anchor="middle">Create my space</text>
</svg>`
  },
  {
    label: "Student lesson view",
    action: 'Luminent response',
    desc: 'Student enters the class. They see the lesson the teacher built, with the same two-panel layout. Left: lesson pages. Center: content. Right: tools panel collapsed.',
    title: "luminent.app · Intro to JavaScript · 1.1 Variables",
    svg: `<svg class="scene" viewBox="0 0 820 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="500" fill="#FAF8F5"/>
  <!-- Left sidebar -->
  <rect x="0" y="0" width="175" height="500" fill="#F0EDE8"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="48" font-size="10" fill="#A8A29E" font-family="Arial">Intro to JavaScript</text>
  <text x="12" y="68" font-size="10" fill="#D4CFC8" font-family="Arial" letter-spacing="1">1.1 VARIABLES</text>
  <rect x="10" y="78" width="155" height="24" rx="4" fill="#DCE7F2"/>
  <text x="20" y="94" font-size="11" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="20" y="120" font-size="11" fill="#94A3B8" font-family="Arial">let and const</text>
  <text x="20" y="144" font-size="11" fill="#94A3B8" font-family="Arial">var vs let vs const</text>
  <text x="20" y="168" font-size="11" fill="#94A3B8" font-family="Arial">Data Types</text>
  <text x="20" y="192" font-size="11" fill="#94A3B8" font-family="Arial">Type coercion</text>
  <text x="20" y="216" font-size="11" fill="#94A3B8" font-family="Arial">Summary</text>
  <text x="12" y="438" font-size="10" fill="#A8A29E" font-family="Arial">Progress</text>
  <rect x="12" y="448" width="151" height="5" rx="2.5" fill="#DDD9D2"/>
  <rect x="12" y="448" width="24" height="5" rx="2.5" fill="#4682B4"/>
  <text x="12" y="468" font-size="10" fill="#D4CFC8" font-family="Arial">Page 1 of 6</text>
  <!-- Center: lesson content -->
  <rect x="175" y="0" width="530" height="500" fill="#FFFFFF"/>
  <text x="193" y="34" font-size="13" font-weight="600" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="193" y="52" font-size="11" fill="#A8A29E" font-family="Arial">From: week1_slides.pdf · Slide 3</text>
  <line x1="193" y1="62" x2="695" y2="62" stroke="#D4CFC8" stroke-width="1"/>
  <rect x="193" y="76" width="490" height="78" rx="6" fill="#F0EDE8" stroke="#D4CFC8" stroke-width="1"/>
  <text x="209" y="98" font-size="12" font-weight="500" fill="#1E293B" font-family="Arial">What is a variable?</text>
  <text x="209" y="116" font-size="11" fill="#64748B" font-family="Arial">A variable is a named container for storing a</text>
  <text x="209" y="132" font-size="11" fill="#64748B" font-family="Arial">value that can change during program execution.</text>
  <rect x="193" y="168" width="490" height="72" rx="6" fill="#F1EDE6" stroke="#D4CFC8" stroke-width="1"/>
  <text x="209" y="190" font-size="11" fill="#38BDF8" font-family="monospace">let</text>
  <text x="233" y="190" font-size="11" fill="#1E293B" font-family="monospace"> name = </text>
  <text x="301" y="190" font-size="11" fill="#4ADE80" font-family="monospace">"Alice"</text>
  <text x="209" y="210" font-size="11" fill="#38BDF8" font-family="monospace">const</text>
  <text x="245" y="210" font-size="11" fill="#1E293B" font-family="monospace"> PI = </text>
  <text x="285" y="210" font-size="11" fill="#FB923C" font-family="monospace">3.14</text>
  <text x="209" y="230" font-size="11" fill="#38BDF8" font-family="monospace">var</text>
  <text x="233" y="230" font-size="11" fill="#1E293B" font-family="monospace"> score = </text>
  <text x="297" y="230" font-size="11" fill="#FB923C" font-family="monospace">0</text>
  <rect x="193" y="254" width="490" height="34" rx="5" fill="#EAE6E0" stroke="#DDD9D2" stroke-width="1"/>
  <text x="209" y="275" font-size="11" fill="#A8A29E" font-family="Arial">Eloquent JS p.6: A variable is a box for storing values...</text>
  <rect x="193" y="456" width="80" height="28" rx="5" fill="#DDD9D2"/>
  <text x="233" y="474" font-size="11" fill="#64748B" font-family="Arial" text-anchor="middle">← Prev</text>
  <rect x="602" y="456" width="80" height="28" rx="5" fill="#DDD9D2"/>
  <text x="642" y="474" font-size="11" fill="#1E293B" font-family="Arial" text-anchor="middle">Next →</text>
  <!-- Right panel collapsed -->
  <rect x="705" y="0" width="115" height="500" fill="#F0EDE8"/>
  <text x="762" y="28" font-size="10" fill="#A8A29E" font-family="Arial" text-anchor="middle">Tools</text>
  <line x1="705" y1="36" x2="820" y2="36" stroke="#D4CFC8" stroke-width="1"/>
  <text x="762" y="72" font-size="18" fill="#D4CFC8" font-family="Arial" text-anchor="middle">✎</text>
  <text x="762" y="88" font-size="9" fill="#D4CFC8" font-family="Arial" text-anchor="middle">Notes</text>
  <text x="762" y="130" font-size="18" fill="#D4CFC8" font-family="Arial" text-anchor="middle">☑</text>
  <text x="762" y="146" font-size="9" fill="#D4CFC8" font-family="Arial" text-anchor="middle">Exercises</text>
  <text x="762" y="188" font-size="18" fill="#D4CFC8" font-family="Arial" text-anchor="middle">⚑</text>
  <text x="762" y="204" font-size="9" fill="#D4CFC8" font-family="Arial" text-anchor="middle">Review</text>
  <text x="762" y="246" font-size="18" fill="#D4CFC8" font-family="Arial" text-anchor="middle">✦</text>
  <text x="762" y="262" font-size="9" fill="#D4CFC8" font-family="Arial" text-anchor="middle">Agent</text>
</svg>`
  },
  {
    label: "Highlight, comment, flag",
    action: 'Student action',
    desc: 'Student highlights a line of content, leaves a comment on it, and flags the page for later review. Three annotation tools shown with labeled callouts.',
    title: "luminent.app · 1.1 Variables · annotating",
    svg: `<svg class="scene" viewBox="0 0 820 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="500" fill="#FAF8F5"/>
  <rect x="0" y="0" width="175" height="500" fill="#F0EDE8"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="48" font-size="10" fill="#A8A29E" font-family="Arial">Intro to JavaScript</text>
  <text x="12" y="68" font-size="10" fill="#D4CFC8" font-family="Arial" letter-spacing="1">1.1 VARIABLES</text>
  <rect x="10" y="78" width="155" height="24" rx="4" fill="#DCE7F2"/>
  <text x="20" y="94" font-size="11" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="20" y="120" font-size="11" fill="#94A3B8" font-family="Arial">let and const</text>
  <text x="20" y="144" font-size="11" fill="#94A3B8" font-family="Arial">var vs let vs const</text>
  <!-- Center -->
  <rect x="175" y="0" width="530" height="500" fill="#FFFFFF"/>
  <!-- Page title row -->
  <text x="193" y="34" font-size="13" font-weight="600" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <!-- Flag icon on title · top right of content area -->
  <rect x="656" y="18" width="28" height="26" rx="5" fill="#FB923C"/>
  <text x="670" y="35" font-size="14" fill="#fff" font-family="Arial" text-anchor="middle">⚑</text>
  <text x="193" y="52" font-size="11" fill="#A8A29E" font-family="Arial">From: week1_slides.pdf · Slide 3</text>
  <line x1="193" y1="62" x2="695" y2="62" stroke="#D4CFC8" stroke-width="1"/>
  <!-- Concept block -->
  <rect x="193" y="76" width="490" height="90" rx="6" fill="#F0EDE8" stroke="#D4CFC8" stroke-width="1"/>
  <text x="209" y="100" font-size="12" font-weight="500" fill="#1E293B" font-family="Arial">What is a variable?</text>
  <!-- Highlighted text line -->
  <rect x="209" y="108" width="286" height="16" rx="2" fill="#FBBF24" opacity="0.35"/>
  <text x="209" y="121" font-size="11" fill="#1E293B" font-family="Arial">A variable is a named container for storing a</text>
  <text x="209" y="139" font-size="11" fill="#64748B" font-family="Arial">value that can change during program execution.</text>
  <!-- Comment popover anchored directly above/beside the highlight -->
  <rect x="209" y="56" width="210" height="46" rx="6" fill="#DCE7F2" stroke="#4682B4" stroke-width="1.5"/>
  <!-- Popover tail pointing down to the highlight -->
  <polygon points="260,102 268,108 276,102" fill="#DCE7F2"/>
  <polygon points="259,102 268,110 277,102" fill="#4682B4"/>
  <polygon points="260,102 268,108 276,102" fill="#DCE7F2"/>
  <text x="221" y="74" font-size="10" font-weight="600" fill="#64748B" font-family="Arial">My comment</text>
  <text x="221" y="90" font-size="11" fill="#1E293B" font-family="Arial">Does this mean primitives too?</text>
  <!-- Code block -->
  <rect x="193" y="182" width="490" height="80" rx="6" fill="#F1EDE6" stroke="#D4CFC8" stroke-width="1"/>
  <text x="209" y="204" font-size="11" fill="#38BDF8" font-family="monospace">let</text>
  <text x="233" y="204" font-size="11" fill="#1E293B" font-family="monospace"> name = </text>
  <text x="301" y="204" font-size="11" fill="#4ADE80" font-family="monospace">"Alice"</text>
  <text x="209" y="224" font-size="11" fill="#38BDF8" font-family="monospace">const</text>
  <text x="245" y="224" font-size="11" fill="#1E293B" font-family="monospace"> PI = </text>
  <text x="285" y="224" font-size="11" fill="#FB923C" font-family="monospace">3.14</text>
  <text x="209" y="244" font-size="11" fill="#38BDF8" font-family="monospace">var</text>
  <text x="233" y="244" font-size="11" fill="#1E293B" font-family="monospace"> score = </text>
  <text x="297" y="244" font-size="11" fill="#FB923C" font-family="monospace">0</text>
  <!-- ANNOTATION CALLOUTS -->
  <!-- Callout 1: Highlight · arrow from label up to the yellow highlight -->
  <rect x="193" y="310" width="110" height="36" rx="6" fill="#EAE6E0" stroke="#FBBF24" stroke-width="1.5"/>
  <text x="248" y="326" font-size="10" font-weight="600" fill="#FBBF24" font-family="Arial" text-anchor="middle">Highlight</text>
  <text x="248" y="340" font-size="9" fill="#94A3B8" font-family="Arial" text-anchor="middle">select any text</text>
  <line x1="248" y1="310" x2="280" y2="124" stroke="#FBBF24" stroke-width="1" stroke-dasharray="3 3"/>
  <polygon points="276,124 280,116 284,124" fill="#FBBF24"/>
  <!-- Callout 2: Comment · arrow from label up to the popover -->
  <rect x="330" y="310" width="110" height="36" rx="6" fill="#EAE6E0" stroke="#4682B4" stroke-width="1.5"/>
  <text x="385" y="326" font-size="10" font-weight="600" fill="#38BDF8" font-family="Arial" text-anchor="middle">Comment</text>
  <text x="385" y="340" font-size="9" fill="#94A3B8" font-family="Arial" text-anchor="middle">on a highlight</text>
  <line x1="340" y1="310" x2="290" y2="102" stroke="#4682B4" stroke-width="1" stroke-dasharray="3 3"/>
  <polygon points="286,104 290,96 294,104" fill="#4682B4"/>
  <!-- Callout 3: Flag · arrow from label up to flag icon -->
  <rect x="566" y="310" width="110" height="36" rx="6" fill="#EAE6E0" stroke="#FB923C" stroke-width="1.5"/>
  <text x="621" y="326" font-size="10" font-weight="600" fill="#FB923C" font-family="Arial" text-anchor="middle">Flag page</text>
  <text x="621" y="340" font-size="9" fill="#94A3B8" font-family="Arial" text-anchor="middle">mark for review</text>
  <line x1="621" y1="310" x2="670" y2="44" stroke="#FB923C" stroke-width="1" stroke-dasharray="3 3"/>
  <polygon points="666,46 670,38 674,46" fill="#FB923C"/>
  <!-- Right panel collapsed -->
  <rect x="705" y="0" width="115" height="500" fill="#F0EDE8"/>
  <text x="762" y="28" font-size="10" fill="#A8A29E" font-family="Arial" text-anchor="middle">Tools</text>
  <line x1="705" y1="36" x2="820" y2="36" stroke="#D4CFC8" stroke-width="1"/>
  <text x="762" y="72" font-size="18" fill="#D4CFC8" font-family="Arial" text-anchor="middle">✎</text>
  <text x="762" y="88" font-size="9" fill="#D4CFC8" font-family="Arial" text-anchor="middle">Notes</text>
  <text x="762" y="130" font-size="18" fill="#D4CFC8" font-family="Arial" text-anchor="middle">☑</text>
  <text x="762" y="146" font-size="9" fill="#D4CFC8" font-family="Arial" text-anchor="middle">Exercises</text>
  <text x="762" y="188" font-size="18" fill="#D4CFC8" font-family="Arial" text-anchor="middle">⚑</text>
  <text x="762" y="204" font-size="9" fill="#D4CFC8" font-family="Arial" text-anchor="middle">Review</text>
  <text x="762" y="246" font-size="18" fill="#D4CFC8" font-family="Arial" text-anchor="middle">✦</text>
  <text x="762" y="262" font-size="9" fill="#D4CFC8" font-family="Arial" text-anchor="middle">Agent</text>
</svg>`
  },
  {
    label: "Right panel: exercises",
    action: 'Student action',
    desc: 'Student opens the Exercises tool from the right panel. They see the exercise the teacher assigned for this lesson.',
    title: "luminent.app · 1.1 Variables · exercises",
    svg: `<svg class="scene" viewBox="0 0 820 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="500" fill="#FAF8F5"/>
  <rect x="0" y="0" width="175" height="500" fill="#F0EDE8"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="48" font-size="10" fill="#A8A29E" font-family="Arial">Intro to JavaScript</text>
  <text x="12" y="68" font-size="10" fill="#D4CFC8" font-family="Arial" letter-spacing="1">1.1 VARIABLES</text>
  <rect x="10" y="78" width="155" height="24" rx="4" fill="#DCE7F2"/>
  <text x="20" y="94" font-size="11" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="20" y="120" font-size="11" fill="#94A3B8" font-family="Arial">let and const</text>
  <text x="20" y="144" font-size="11" fill="#94A3B8" font-family="Arial">var vs let vs const</text>
  <!-- Center: lesson content (condensed) -->
  <rect x="175" y="0" width="370" height="500" fill="#FFFFFF"/>
  <text x="193" y="34" font-size="13" font-weight="600" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="193" y="52" font-size="11" fill="#A8A29E" font-family="Arial">From: week1_slides.pdf · Slide 3</text>
  <line x1="193" y1="62" x2="535" y2="62" stroke="#D4CFC8" stroke-width="1"/>
  <rect x="193" y="76" width="330" height="78" rx="6" fill="#F0EDE8" stroke="#D4CFC8" stroke-width="1"/>
  <text x="209" y="98" font-size="12" font-weight="500" fill="#1E293B" font-family="Arial">What is a variable?</text>
  <text x="209" y="116" font-size="11" fill="#64748B" font-family="Arial">A variable is a named container for storing a</text>
  <text x="209" y="132" font-size="11" fill="#64748B" font-family="Arial">value that can change during program execution.</text>
  <rect x="193" y="168" width="330" height="72" rx="6" fill="#F1EDE6" stroke="#D4CFC8" stroke-width="1"/>
  <text x="209" y="190" font-size="11" fill="#38BDF8" font-family="monospace">let</text>
  <text x="233" y="190" font-size="11" fill="#1E293B" font-family="monospace"> name = </text>
  <text x="301" y="190" font-size="11" fill="#4ADE80" font-family="monospace">"Alice"</text>
  <text x="209" y="210" font-size="11" fill="#38BDF8" font-family="monospace">const</text>
  <text x="245" y="210" font-size="11" fill="#1E293B" font-family="monospace"> PI = </text>
  <text x="285" y="210" font-size="11" fill="#FB923C" font-family="monospace">3.14</text>
  <!-- Right panel: exercises open -->
  <rect x="545" y="0" width="275" height="500" fill="#F0EDE8"/>
  <text x="562" y="26" font-size="11" font-weight="600" fill="#1E293B" font-family="Arial">Exercises</text>
  <line x1="545" y1="36" x2="820" y2="36" stroke="#D4CFC8" stroke-width="1"/>
  <!-- Tool tabs -->
  <text x="562" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Notes</text>
  <rect x="598" y="46" width="64" height="20" rx="4" fill="#DCE7F2"/>
  <text x="630" y="60" font-size="10" fill="#1E293B" font-family="Arial" text-anchor="middle">Exercises</text>
  <text x="676" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Review</text>
  <text x="722" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Agent</text>
  <line x1="545" y1="68" x2="820" y2="68" stroke="#D4CFC8" stroke-width="1"/>
  <!-- Exercise card -->
  <text x="562" y="90" font-size="11" fill="#A8A29E" font-family="Arial">Assigned for this lesson</text>
  <rect x="556" y="100" width="248" height="112" rx="7" fill="#FFFFFF" stroke="#4682B4" stroke-width="1.5"/>
  <rect x="556" y="100" width="4" height="112" rx="2" fill="#4682B4"/>
  <text x="572" y="122" font-size="12" font-weight="500" fill="#1E293B" font-family="Arial">Defining variables</text>
  <text x="572" y="140" font-size="11" fill="#94A3B8" font-family="Arial">Coding sandbox · Foundational</text>
  <text x="572" y="158" font-size="11" fill="#64748B" font-family="Arial">Declare let, const, and var.</text>
  <text x="572" y="174" font-size="11" fill="#64748B" font-family="Arial">Reassign and observe behavior.</text>
  <rect x="572" y="186" width="90" height="18" rx="4" fill="#DCE7F2"/>
  <text x="617" y="199" font-size="10" fill="#38BDF8" font-family="Arial" text-anchor="middle">Not started</text>
  <rect x="670" y="184" width="78" height="22" rx="5" fill="#4682B4"/>
  <text x="709" y="199" font-size="11" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">Open →</text>
  <!-- Re-teaching exercises -->
  <text x="562" y="236" font-size="10" font-weight="600" fill="#FB923C" font-family="Arial" letter-spacing="1">RE-TEACHING</text>
  <rect x="556" y="244" width="248" height="76" rx="7" fill="#FFFFFF" stroke="#FB923C" stroke-width="1" opacity="0.8"/>
  <rect x="556" y="244" width="4" height="76" rx="2" fill="#FB923C"/>
  <text x="572" y="265" font-size="12" font-weight="500" fill="#1E293B" font-family="Arial">Fix the bug: const</text>
  <text x="572" y="283" font-size="11" fill="#94A3B8" font-family="Arial">Coding sandbox · Fix-the-bug</text>
  <rect x="572" y="296" width="90" height="18" rx="4" fill="#EAE6E0"/>
  <text x="617" y="309" font-size="10" fill="#A8A29E" font-family="Arial" text-anchor="middle">Not started</text>
  <rect x="670" y="294" width="78" height="22" rx="5" fill="#DDD9D2"/>
  <text x="709" y="309" font-size="11" fill="#64748B" font-family="Arial" text-anchor="middle">Open →</text>
</svg>`
  },
  {
    label: "Right panel: notes",
    action: 'Student action',
    desc: 'Student switches to the Notes tool. They can type freely alongside the lesson content. Notes are private to the student.',
    title: "luminent.app · 1.1 Variables · notes",
    svg: `<svg class="scene" viewBox="0 0 820 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="500" fill="#FAF8F5"/>
  <rect x="0" y="0" width="175" height="500" fill="#F0EDE8"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="48" font-size="10" fill="#A8A29E" font-family="Arial">Intro to JavaScript</text>
  <text x="12" y="68" font-size="10" fill="#D4CFC8" font-family="Arial" letter-spacing="1">1.1 VARIABLES</text>
  <rect x="10" y="78" width="155" height="24" rx="4" fill="#DCE7F2"/>
  <text x="20" y="94" font-size="11" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="20" y="120" font-size="11" fill="#94A3B8" font-family="Arial">let and const</text>
  <text x="20" y="144" font-size="11" fill="#94A3B8" font-family="Arial">var vs let vs const</text>
  <!-- Center: lesson content condensed -->
  <rect x="175" y="0" width="370" height="500" fill="#FFFFFF"/>
  <text x="193" y="34" font-size="13" font-weight="600" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="193" y="52" font-size="11" fill="#A8A29E" font-family="Arial">From: week1_slides.pdf · Slide 3</text>
  <line x1="193" y1="62" x2="535" y2="62" stroke="#D4CFC8" stroke-width="1"/>
  <rect x="193" y="76" width="330" height="78" rx="6" fill="#F0EDE8" stroke="#D4CFC8" stroke-width="1"/>
  <text x="209" y="98" font-size="12" font-weight="500" fill="#1E293B" font-family="Arial">What is a variable?</text>
  <text x="209" y="116" font-size="11" fill="#64748B" font-family="Arial">A variable is a named container for storing a</text>
  <text x="209" y="132" font-size="11" fill="#64748B" font-family="Arial">value that can change during program execution.</text>
  <rect x="193" y="168" width="330" height="72" rx="6" fill="#F1EDE6" stroke="#D4CFC8" stroke-width="1"/>
  <text x="209" y="190" font-size="11" fill="#38BDF8" font-family="monospace">let</text>
  <text x="233" y="190" font-size="11" fill="#1E293B" font-family="monospace"> name = </text>
  <text x="301" y="190" font-size="11" fill="#4ADE80" font-family="monospace">"Alice"</text>
  <text x="209" y="210" font-size="11" fill="#38BDF8" font-family="monospace">const</text>
  <text x="245" y="210" font-size="11" fill="#1E293B" font-family="monospace"> PI = </text>
  <text x="285" y="210" font-size="11" fill="#FB923C" font-family="monospace">3.14</text>
  <!-- Right panel: notes open -->
  <rect x="545" y="0" width="275" height="500" fill="#F0EDE8"/>
  <text x="562" y="26" font-size="11" font-weight="600" fill="#1E293B" font-family="Arial">Notes</text>
  <line x1="545" y1="36" x2="820" y2="36" stroke="#D4CFC8" stroke-width="1"/>
  <!-- Tool tabs -->
  <rect x="556" y="46" width="46" height="20" rx="4" fill="#DCE7F2"/>
  <text x="579" y="60" font-size="10" fill="#1E293B" font-family="Arial" text-anchor="middle">Notes</text>
  <text x="620" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Exercises</text>
  <text x="678" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Review</text>
  <text x="722" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Agent</text>
  <line x1="545" y1="68" x2="820" y2="68" stroke="#D4CFC8" stroke-width="1"/>
  <!-- Formatting toolbar -->
  <rect x="556" y="76" width="248" height="26" rx="4" fill="#FFFFFF" stroke="#DDD9D2" stroke-width="1"/>
  <text x="572" y="93" font-size="11" font-weight="600" fill="#94A3B8" font-family="Arial">B</text>
  <text x="590" y="92" font-size="11" fill="#94A3B8" font-family="Arial" font-style="italic">I</text>
  <line x1="604" y1="80" x2="604" y2="98" stroke="#D4CFC8" stroke-width="1"/>
  <text x="618" y="93" font-size="10" fill="#94A3B8" font-family="Arial">H1</text>
  <text x="640" y="93" font-size="10" fill="#94A3B8" font-family="Arial">H2</text>
  <line x1="658" y1="80" x2="658" y2="98" stroke="#D4CFC8" stroke-width="1"/>
  <text x="672" y="93" font-size="11" fill="#94A3B8" font-family="Arial">·</text>
  <text x="690" y="93" font-size="11" fill="#94A3B8" font-family="Arial">• </text>
  <!-- Notes text area -->
  <rect x="556" y="108" width="248" height="290" rx="5" fill="#FFFFFF" stroke="#DDD9D2" stroke-width="1"/>
  <text x="570" y="130" font-size="12" font-weight="500" fill="#1E293B" font-family="Arial">Variables · key points</text>
  <line x1="570" y1="140" x2="790" y2="140" stroke="#D4CFC8" stroke-width="0.5"/>
  <text x="570" y="160" font-size="11" fill="#64748B" font-family="Arial">let → can be reassigned</text>
  <text x="570" y="178" font-size="11" fill="#64748B" font-family="Arial">const → cannot reassign after set</text>
  <text x="570" y="196" font-size="11" fill="#64748B" font-family="Arial">var → function-scoped (avoid!)</text>
  <line x1="570" y1="208" x2="790" y2="208" stroke="#D4CFC8" stroke-width="0.5"/>
  <text x="570" y="228" font-size="11" fill="#64748B" font-family="Arial">Q: why does const fail on objects?</text>
  <text x="570" y="246" font-size="11" fill="#A8A29E" font-family="Arial">Need to look into this more...</text>
  <rect x="570" y="252" width="1.5" height="14" fill="#38BDF8"/>
  <!-- Private note -->
  <text x="562" y="420" font-size="10" fill="#D4CFC8" font-family="Arial">Private · only visible to you</text>
</svg>`
  },
  {
    label: "Right panel: review",
    action: 'Student action',
    desc: 'Student opens Review. All flagged pages and highlighted passages are collected in one place for consolidated study.',
    title: "luminent.app · 1.1 Variables · review",
    svg: `<svg class="scene" viewBox="0 0 820 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="500" fill="#FAF8F5"/>
  <rect x="0" y="0" width="175" height="500" fill="#F0EDE8"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="48" font-size="10" fill="#A8A29E" font-family="Arial">Intro to JavaScript</text>
  <text x="12" y="68" font-size="10" fill="#D4CFC8" font-family="Arial" letter-spacing="1">1.1 VARIABLES</text>
  <rect x="10" y="78" width="155" height="24" rx="4" fill="#DCE7F2"/>
  <text x="20" y="94" font-size="11" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="20" y="120" font-size="11" fill="#94A3B8" font-family="Arial">let and const</text>
  <text x="20" y="144" font-size="11" fill="#94A3B8" font-family="Arial">var vs let vs const</text>
  <!-- Center condensed -->
  <rect x="175" y="0" width="370" height="500" fill="#FFFFFF"/>
  <text x="193" y="34" font-size="13" font-weight="600" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="193" y="52" font-size="11" fill="#A8A29E" font-family="Arial">From: week1_slides.pdf · Slide 3</text>
  <line x1="193" y1="62" x2="535" y2="62" stroke="#D4CFC8" stroke-width="1"/>
  <rect x="193" y="76" width="330" height="78" rx="6" fill="#F0EDE8" stroke="#D4CFC8" stroke-width="1"/>
  <text x="209" y="98" font-size="12" font-weight="500" fill="#1E293B" font-family="Arial">What is a variable?</text>
  <rect x="209" y="106" width="260" height="14" rx="2" fill="#FBBF24" opacity="0.2"/>
  <text x="209" y="118" font-size="11" fill="#1E293B" font-family="Arial">A variable is a named container for storing a</text>
  <text x="209" y="136" font-size="11" fill="#64748B" font-family="Arial">value that can change during program execution.</text>
  <!-- Right panel: review open -->
  <rect x="545" y="0" width="275" height="500" fill="#F0EDE8"/>
  <text x="562" y="26" font-size="11" font-weight="600" fill="#1E293B" font-family="Arial">Review</text>
  <line x1="545" y1="36" x2="820" y2="36" stroke="#D4CFC8" stroke-width="1"/>
  <text x="562" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Notes</text>
  <text x="604" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Exercises</text>
  <rect x="648" y="46" width="46" height="20" rx="4" fill="#DCE7F2"/>
  <text x="671" y="60" font-size="10" fill="#1E293B" font-family="Arial" text-anchor="middle">Review</text>
  <text x="710" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Agent</text>
  <line x1="545" y1="68" x2="820" y2="68" stroke="#D4CFC8" stroke-width="1"/>
  <!-- Flagged pages section -->
  <text x="562" y="90" font-size="10" font-weight="600" fill="#FB923C" font-family="Arial" letter-spacing="1">FLAGGED PAGES</text>
  <rect x="556" y="98" width="248" height="44" rx="5" fill="#FFFFFF" stroke="#FB923C" stroke-width="1" opacity="0.7"/>
  <text x="572" y="116" font-size="11" font-weight="500" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="572" y="132" font-size="10" fill="#94A3B8" font-family="Arial">1.1 · Page 1 · flagged for review</text>
  <rect x="556" y="150" width="248" height="44" rx="5" fill="#FFFFFF" stroke="#FB923C" stroke-width="1" opacity="0.7"/>
  <text x="572" y="168" font-size="11" font-weight="500" fill="#1E293B" font-family="Arial">var vs let vs const</text>
  <text x="572" y="184" font-size="10" fill="#94A3B8" font-family="Arial">1.1 · Page 3 · flagged for review</text>
  <!-- Highlights section -->
  <text x="562" y="214" font-size="10" font-weight="600" fill="#FBBF24" font-family="Arial" letter-spacing="1">HIGHLIGHTS</text>
  <rect x="556" y="222" width="248" height="52" rx="5" fill="#FFFFFF" stroke="#FBBF24" stroke-width="1" opacity="0.6"/>
  <rect x="556" y="222" width="3" height="52" rx="1" fill="#FBBF24"/>
  <text x="572" y="240" font-size="11" fill="#1E293B" font-family="Arial">A variable is a named container</text>
  <text x="572" y="256" font-size="11" fill="#1E293B" font-family="Arial">for storing a value...</text>
  <text x="572" y="268" font-size="10" fill="#94A3B8" font-family="Arial">1.1 · Page 1 · your comment: Does this mean primitives too?</text>
  <rect x="556" y="282" width="248" height="44" rx="5" fill="#FFFFFF" stroke="#FBBF24" stroke-width="1" opacity="0.6"/>
  <rect x="556" y="282" width="3" height="44" rx="1" fill="#FBBF24"/>
  <text x="572" y="300" font-size="11" fill="#1E293B" font-family="Arial">const cannot be reassigned</text>
  <text x="572" y="316" font-size="10" fill="#94A3B8" font-family="Arial">1.1 · Page 2 · no comment</text>
  <!-- Generate flashcards CTA -->
  <rect x="556" y="344" width="248" height="30" rx="6" fill="#DCE7F2" stroke="#4682B4" stroke-width="1"/>
  <text x="680" y="363" font-size="11" fill="#64748B" font-family="Arial" text-anchor="middle">Generate flashcards from highlights</text>
</svg>`
  },
  {
    label: "Right panel: Luminent agent",
    action: 'Student action',
    desc: 'Student opens the Agent tool and asks a question. Luminent answers and pulls a textbook reference grounded in the source material with a page citation.',
    title: "luminent.app · 1.1 Variables · agent",
    svg: `<svg class="scene" viewBox="0 0 820 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="500" fill="#FAF8F5"/>
  <rect x="0" y="0" width="175" height="500" fill="#F0EDE8"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="48" font-size="10" fill="#A8A29E" font-family="Arial">Intro to JavaScript</text>
  <text x="12" y="68" font-size="10" fill="#D4CFC8" font-family="Arial" letter-spacing="1">1.1 VARIABLES</text>
  <rect x="10" y="78" width="155" height="24" rx="4" fill="#DCE7F2"/>
  <text x="20" y="94" font-size="11" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="20" y="120" font-size="11" fill="#94A3B8" font-family="Arial">let and const</text>
  <text x="20" y="144" font-size="11" fill="#94A3B8" font-family="Arial">var vs let vs const</text>
  <!-- Center condensed -->
  <rect x="175" y="0" width="370" height="500" fill="#FFFFFF"/>
  <text x="193" y="34" font-size="13" font-weight="600" fill="#1E293B" font-family="Arial">Intro to Variables</text>
  <text x="193" y="52" font-size="11" fill="#A8A29E" font-family="Arial">From: week1_slides.pdf · Slide 3</text>
  <line x1="193" y1="62" x2="535" y2="62" stroke="#D4CFC8" stroke-width="1"/>
  <rect x="193" y="76" width="330" height="78" rx="6" fill="#F0EDE8" stroke="#D4CFC8" stroke-width="1"/>
  <text x="209" y="98" font-size="12" font-weight="500" fill="#1E293B" font-family="Arial">What is a variable?</text>
  <text x="209" y="116" font-size="11" fill="#64748B" font-family="Arial">A variable is a named container for storing a</text>
  <text x="209" y="132" font-size="11" fill="#64748B" font-family="Arial">value that can change during program execution.</text>
  <rect x="193" y="168" width="330" height="72" rx="6" fill="#F1EDE6" stroke="#D4CFC8" stroke-width="1"/>
  <text x="209" y="190" font-size="11" fill="#38BDF8" font-family="monospace">let</text>
  <text x="233" y="190" font-size="11" fill="#1E293B" font-family="monospace"> name = </text>
  <text x="301" y="190" font-size="11" fill="#4ADE80" font-family="monospace">"Alice"</text>
  <text x="209" y="210" font-size="11" fill="#38BDF8" font-family="monospace">const</text>
  <text x="245" y="210" font-size="11" fill="#1E293B" font-family="monospace"> PI = </text>
  <text x="285" y="210" font-size="11" fill="#FB923C" font-family="monospace">3.14</text>
  <!-- Right panel: agent open -->
  <rect x="545" y="0" width="275" height="500" fill="#F0EDE8"/>
  <text x="562" y="26" font-size="11" font-weight="600" fill="#1E293B" font-family="Arial">Luminent agent</text>
  <line x1="545" y1="36" x2="820" y2="36" stroke="#D4CFC8" stroke-width="1"/>
  <text x="562" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Notes</text>
  <text x="604" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Exercises</text>
  <text x="660" y="58" font-size="10" fill="#A8A29E" font-family="Arial">Review</text>
  <rect x="698" y="46" width="46" height="20" rx="4" fill="#DCE7F2"/>
  <text x="721" y="60" font-size="10" fill="#1E293B" font-family="Arial" text-anchor="middle">Agent</text>
  <line x1="545" y1="68" x2="820" y2="68" stroke="#D4CFC8" stroke-width="1"/>
  <!-- Context badge -->
  <rect x="556" y="76" width="248" height="20" rx="4" fill="#EAE6E0" stroke="#DDD9D2" stroke-width="1"/>
  <text x="680" y="90" font-size="9" fill="#A8A29E" font-family="Arial" text-anchor="middle">Grounded in: week1_slides.pdf + Eloquent JS</text>
  <!-- Student message -->
  <rect x="610" y="104" width="186" height="38" rx="6" fill="#DCE7F2"/>
  <text x="703" y="120" font-size="11" fill="#1E293B" font-family="Arial" text-anchor="middle">Why does const fail when I</text>
  <text x="703" y="136" font-size="11" fill="#1E293B" font-family="Arial" text-anchor="middle">try to reassign it?</text>
  <!-- Agent reply -->
  <rect x="556" y="152" width="220" height="100" rx="6" fill="#F0EDE8" stroke="#D4CFC8" stroke-width="1"/>
  <text x="566" y="170" font-size="10" font-weight="600" fill="#4682B4" font-family="Arial">Luminent</text>
  <text x="566" y="186" font-size="10" fill="#64748B" font-family="Arial">const prevents the variable</text>
  <text x="566" y="200" font-size="10" fill="#64748B" font-family="Arial">binding from being changed.</text>
  <text x="566" y="214" font-size="10" fill="#64748B" font-family="Arial">Once set, the name is locked</text>
  <text x="566" y="228" font-size="10" fill="#64748B" font-family="Arial">to that value permanently.</text>
  <text x="566" y="244" font-size="10" fill="#94A3B8" font-family="Arial">Reassigning throws a TypeError.</text>
  <!-- Textbook ref block -->
  <rect x="556" y="264" width="248" height="68" rx="6" fill="#EAE6E0" stroke="#DDD9D2" stroke-width="1"/>
  <text x="566" y="280" font-size="9" font-weight="600" fill="#A8A29E" font-family="Arial" letter-spacing="1">FROM YOUR TEXTBOOK</text>
  <text x="566" y="296" font-size="10" fill="#64748B" font-family="Arial">Eloquent JavaScript · p.8</text>
  <text x="566" y="312" font-size="10" fill="#94A3B8" font-family="Arial">const defines a constant binding.</text>
  <text x="566" y="326" font-size="10" fill="#94A3B8" font-family="Arial">The value it points to may still change.</text>
  <!-- Follow-up suggestions -->
  <text x="562" y="352" font-size="10" fill="#D4CFC8" font-family="Arial">Ask a follow-up</text>
  <rect x="556" y="360" width="248" height="22" rx="4" fill="#FFFFFF" stroke="#DDD9D2" stroke-width="1"/>
  <text x="566" y="375" font-size="10" fill="#D4CFC8" font-family="Arial">Can const hold a mutable object?</text>
  <!-- Input -->
  <rect x="556" y="448" width="210" height="30" rx="5" fill="#FFFFFF" stroke="#DDD9D2" stroke-width="1"/>
  <text x="566" y="467" font-size="11" fill="#D4CFC8" font-family="Arial">Ask anything...</text>
  <rect x="772" y="448" width="32" height="30" rx="5" fill="#4682B4"/>
  <text x="788" y="467" font-size="13" fill="#fff" font-family="Arial" text-anchor="middle">↑</text>
</svg>`
  }
  ,{
    label: "My performance review",
    action: 'Student view',
    desc: 'Student opens their personal performance dashboard. They see concept-by-concept breakdown, what they know versus what they to strengthen, and what to practice next.',
    title: "luminent.app · 1.1 Variables · my performance",
    svg: `<svg class="scene" viewBox="0 0 820 560" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="560" fill="#FAF8F5"/>
  <!-- Left sidebar -->
  <rect x="0" y="0" width="175" height="560" fill="#F0EDE8"/>
  <text x="12" y="28" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" letter-spacing="2">LUMINENT</text>
  <text x="12" y="48" font-size="10" fill="#A8A29E" font-family="Arial">Intro to JavaScript</text>
  <text x="12" y="68" font-size="10" fill="#C4BFB8" font-family="Arial" letter-spacing="1">1.1 VARIABLES</text>
  <text x="20" y="96" font-size="11" fill="#A8A29E" font-family="Arial">Intro to Variables</text>
  <text x="20" y="120" font-size="11" fill="#A8A29E" font-family="Arial">let and const</text>
  <text x="20" y="144" font-size="11" fill="#A8A29E" font-family="Arial">var vs let vs const</text>
  <rect x="10" y="166" width="155" height="24" rx="4" fill="#DCE7F2"/>
  <text x="20" y="182" font-size="11" fill="#4682B4" font-family="Arial">My performance</text>
  <!-- Main area -->
  <rect x="175" y="0" width="645" height="560" fill="#FFFFFF"/>
  <!-- Header -->
  <text x="195" y="38" font-size="14" font-weight="600" fill="#1E293B" font-family="Arial">My performance · 1.1 Variables</text>
  <text x="195" y="56" font-size="11" fill="#A8A29E" font-family="Arial">Completed · last attempt 2 hours ago</text>
  <line x1="195" y1="66" x2="790" y2="66" stroke="#D4CFC8" stroke-width="1"/>
  <!-- Score cards row -->
  <rect x="195" y="78" width="130" height="64" rx="7" fill="#F5F2EE" stroke="#D4CFC8" stroke-width="1"/>
  <text x="260" y="100" font-size="10" fill="#A8A29E" font-family="Arial" text-anchor="middle">Your score</text>
  <text x="260" y="126" font-size="26" font-weight="600" fill="#FBBF24" font-family="Arial" text-anchor="middle">64%</text>
  <rect x="337" y="78" width="130" height="64" rx="7" fill="#F5F2EE" stroke="#D4CFC8" stroke-width="1"/>
  <text x="402" y="100" font-size="10" fill="#A8A29E" font-family="Arial" text-anchor="middle">Attempts</text>
  <text x="402" y="126" font-size="26" font-weight="600" fill="#1E293B" font-family="Arial" text-anchor="middle">3</text>
  <rect x="479" y="78" width="130" height="64" rx="7" fill="#F5F2EE" stroke="#D4CFC8" stroke-width="1"/>
  <text x="544" y="100" font-size="10" fill="#A8A29E" font-family="Arial" text-anchor="middle">Class avg</text>
  <text x="544" y="126" font-size="26" font-weight="600" fill="#64748B" font-family="Arial" text-anchor="middle">71%</text>
  <rect x="621" y="78" width="164" height="64" rx="7" fill="#E8F1F8" stroke="#BAD1E6" stroke-width="1"/>
  <text x="703" y="100" font-size="10" fill="#38BDF8" font-family="Arial" text-anchor="middle">Where to focus</text>
  <text x="703" y="118" font-size="12" font-weight="500" fill="#4682B4" font-family="Arial" text-anchor="middle">const reassignment</text>
  <text x="703" y="134" font-size="11" fill="#38BDF8" font-family="Arial" text-anchor="middle">+ var scope</text>
  <!-- Concept breakdown -->
  <text x="195" y="168" font-size="11" font-weight="600" fill="#1E293B" font-family="Arial">Concept breakdown</text>
  <text x="195" y="186" font-size="11" fill="#A8A29E" font-family="Arial">let declaration</text>
  <rect x="310" y="174" width="280" height="14" rx="3" fill="#EAE6E0"/>
  <rect x="310" y="174" width="258" height="14" rx="3" fill="#4ADE80" opacity="0.6"/>
  <text x="600" y="186" font-size="10" fill="#64748B" font-family="Arial">92%</text>
  <rect x="640" y="174" width="60" height="14" rx="3" fill="#DCFCE7"/>
  <text x="670" y="185" font-size="9" fill="#16A34A" font-family="Arial" text-anchor="middle">strong</text>
  <text x="195" y="212" font-size="11" fill="#A8A29E" font-family="Arial">const usage</text>
  <rect x="310" y="200" width="280" height="14" rx="3" fill="#EAE6E0"/>
  <rect x="310" y="200" width="134" height="14" rx="3" fill="#FBBF24" opacity="0.7"/>
  <text x="600" y="212" font-size="10" fill="#64748B" font-family="Arial">48%</text>
  <rect x="640" y="200" width="60" height="14" rx="3" fill="#FEF9C3"/>
  <text x="670" y="211" font-size="9" fill="#CA8A04" font-family="Arial" text-anchor="middle">fair</text>
  <text x="195" y="238" font-size="11" fill="#A8A29E" font-family="Arial">var scope</text>
  <rect x="310" y="226" width="280" height="14" rx="3" fill="#EAE6E0"/>
  <rect x="310" y="226" width="70" height="14" rx="3" fill="#F87171" opacity="0.7"/>
  <text x="600" y="238" font-size="10" fill="#64748B" font-family="Arial">25%</text>
  <rect x="640" y="226" width="60" height="14" rx="3" fill="#FEE2E2"/>
  <text x="670" y="237" font-size="9" fill="#DC2626" font-family="Arial" text-anchor="middle">low</text>
  <text x="195" y="264" font-size="11" fill="#A8A29E" font-family="Arial">type coercion</text>
  <rect x="310" y="252" width="280" height="14" rx="3" fill="#EAE6E0"/>
  <rect x="310" y="252" width="196" height="14" rx="3" fill="#4ADE80" opacity="0.5"/>
  <text x="600" y="264" font-size="10" fill="#64748B" font-family="Arial">70%</text>
  <rect x="640" y="252" width="60" height="14" rx="3" fill="#DCFCE7"/>
  <text x="670" y="263" font-size="9" fill="#16A34A" font-family="Arial" text-anchor="middle">strong</text>
  <line x1="195" y1="280" x2="790" y2="280" stroke="#EAE6E0" stroke-width="1"/>
  <!-- Luminent observed -->
  <rect x="195" y="292" width="370" height="76" rx="7" fill="#F5F2EE" stroke="#D4CFC8" stroke-width="1"/>
  <text x="211" y="314" font-size="11" font-weight="600" fill="#1E293B" font-family="Arial">Luminent noticed</text>
  <text x="211" y="332" font-size="11" fill="#64748B" font-family="Arial">You passed let quickly but slowed on const ·</text>
  <text x="211" y="348" font-size="11" fill="#64748B" font-family="Arial">tried to reassign it twice. var scope was attempted</text>
  <text x="211" y="364" font-size="11" fill="#64748B" font-family="Arial">once and skipped. These are your two focus areas.</text>
  <!-- Suggested practice -->
  <rect x="577" y="292" width="208" height="76" rx="7" fill="#E8F1F8" stroke="#BAD1E6" stroke-width="1.5"/>
  <text x="681" y="314" font-size="11" font-weight="600" fill="#4682B4" font-family="Arial" text-anchor="middle">Suggested next</text>
  <text x="681" y="332" font-size="11" fill="#38BDF8" font-family="Arial" text-anchor="middle">Re-teaching exercises</text>
  <text x="681" y="348" font-size="11" fill="#94A3B8" font-family="Arial" text-anchor="middle">on const + var scope</text>
  <rect x="597" y="356" width="168" height="26" rx="5" fill="#4682B4"/>
  <text x="681" y="373" font-size="11" font-weight="500" fill="#fff" font-family="Arial" text-anchor="middle">Practice these gaps →</text>
  <!-- Timeline -->
  <text x="195" y="396" font-size="11" font-weight="600" fill="#1E293B" font-family="Arial">Attempt history</text>
  <!-- Attempt 1 -->
  <circle cx="207" cy="420" r="6" fill="#F87171"/>
  <line x1="207" y1="426" x2="207" y2="456" stroke="#D4CFC8" stroke-width="1"/>
  <text x="222" y="424" font-size="11" fill="#64748B" font-family="Arial">Attempt 1 · 38% · TypeError on const reassignment</text>
  <!-- Attempt 2 -->
  <circle cx="207" cy="462" r="6" fill="#FBBF24"/>
  <line x1="207" y1="468" x2="207" y2="498" stroke="#D4CFC8" stroke-width="1"/>
  <text x="222" y="466" font-size="11" fill="#64748B" font-family="Arial">Attempt 2 · 55% · passed let, still working on var scope</text>
  <!-- Attempt 3 -->
  <circle cx="207" cy="504" r="6" fill="#FBBF24"/>
  <text x="222" y="508" font-size="11" fill="#64748B" font-family="Arial">Attempt 3 · 64% · closer, but var scope unresolved</text>
  <!-- Confident but wrong callout -->
  <rect x="195" y="526" width="590" height="24" rx="5" fill="#FEF9C3" stroke="#FDE68A" stroke-width="1"/>
  <text x="490" y="542" font-size="11" fill="#92400E" font-family="Arial" text-anchor="middle">Worth another look: you answered const question quickly on attempt 3 · worth a second pass. Luminent will resurface this.</text>
</svg>`
  }
];
