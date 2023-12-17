import { it, describe } from "vitest";

describe("Call for Github content", () => {
    it("Get repo README.md html content", async () => {
        const md = await fetch("https://api.github.com/repos/kotekpsotek/wastledb/readme", {
            headers: {
                "Content-Type": "application/vnd.github.html"
            }
        });

        const content = (await md.json()).content;
        console.log(md.status, content)
    });
})
