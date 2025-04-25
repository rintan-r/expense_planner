
const HeroSection = () => {

    //Text Content of hero section
    const textContent = [
        { id: "headline_txt", type: "heading", content: `Conference Expense Planner` },
        { id: "subheading_txt", type: "subheading", content: `Plan your next major event with us!`},
        { id: "CTA_label", type:"button", content: `Get Started` },
        { id: "paragraph_txt", type: "paragraph",  content : [
            `Welcome to BudgetEase Solutions, your trusted partner in simplifying budget management and financial solutions. At BudgetEase, we understand the importance of effective budget planning and strive to provide intuitive, user-friendly solutions to meet the diverse needs of our clients.`,
            `With a commitment to efficiency and innovation, we empower individuals and businesses to take control of their finances and achieve their goals with ease. `,
            `At BudgetEase Solutions, our mission is to make budgeting effortless and accessible for everyone. Whether you're a small business owner, a busy professional, or an individual looking to manage your personal finances, we offer tailored solutions to streamline your budgeting process.`,
        ]},
    ];

    // Helper function
    const getItemContent = (id, defaultValue = "") => {
        const item = textContent.find((item) => item.id === id);
        if (!item) return defaultValue;

        const content = item.content;

        //if content is an array, return array
        if (Array.isArray(content)) return content;

        return [content];
    };

    // Error handling - check if data is available
    if (!getItemContent("headline_txt") || !getItemContent("subheading_txt") || !getItemContent("CTA_label") || !getItemContent("paragraph_txt")) {
        return <div>Data is not available</div>;
    }

    return(
        <div className="grid grid-cols-2">
            <div className="p-2 space-y-4 content-center">
                <h1>{getItemContent("headline_txt")}</h1>
                <h3>{getItemContent("subheading_txt")}</h3>
                <button className="bg-blue-500">{getItemContent("CTA_label")}</button>
            </div>
            <div className="p-2 space-y-4 text-justify">
                {getItemContent("paragraph_txt").map((p,i) => (
                    <p key = {i}> {p} </p>
                ))}
            </div>
        </div>
    )

}

export default HeroSection


