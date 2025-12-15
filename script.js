async function runAgent() {
    const data = {
        student: {
            name: "Anika",
            skills: ["Python", "HTML", "CSS"],
            target_role: "AI Engineer",
            communication_level: "medium",
            aptitude_score: 78
        },
        job: {
            company: "Google",
            required_skills: ["Python", "Machine Learning", "Data Structures", "APIs"]
        }
    };

    const response = await fetch("http://127.0.0.1:8000/velionx/analyse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById("output").textContent =
        JSON.stringify(result, null, 2);
}
