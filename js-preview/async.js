//จำลองข้อมลจก server
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function demo () {
    console.log("1) Start Loading...");
    await wait(2000);
    console.log("2) complete");
    await getUsers();
}

async function getUsers() {
    try{
        const respons = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=10");
        if (!respons.ok) {
            throw new Error(`HTTP ${respons.status}`);
        }
        const postData = await respons.json();
        console.log(`Get data ${postData.length}`);
        postData.forEach((p) => console.log(p.id, p.title, "-", p.body));
    } catch (error) {
        console.error("Error Found :", error.message);
    }
}

demo();
console.log("3) Show Data");