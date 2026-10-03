import express from "express";
import dotenv from "dotenv";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { z } from "zod";
import { haeKaikkiVaiheet, haeVaiheenSelitys } from "./models/opn_vaiheet_Model.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Ulkoinen taso
app.post("/", async (req, res) => {
  try {
    const transport = new StreamableHTTPServerTransport({
    });
    const server = new McpServer({
      name: "OpinnaytetyotMCP",
      version: "1.0.0",

    });
    // Sisäinen taso
     // 1. tool
      server.registerTool(
        "hae-vaiheet",
        {
          title: "hae vaiheet",
          description: "Hakee opinnäytetöiden vaiheet tietokannasta lyhyesti",
          inputSchema: z.object({}),
        },
        async () => {
          try {
            const vaiheet = await haeKaikkiVaiheet();
            if (vaiheet.length === 0) {
              return { content: [{ type: "text", text: "Ei vaiheita tietokannassa"}]}
            }
            const list = vaiheet.map((v) => `- ${v}`).join("\n");
              return { content: [{type: "text", text: list }] };
          } catch (error) {
            return {
              content: [{ type: "text", text: `Virhe tietokantahaussa: ${(error as Error).message}`}],
            };
          }
        }
      );
   
    
    
    // 2. tool
    server.registerTool(
      "hae-vaiheen-selitys",
      {
        title: "hae vaiheen selitys",
        description: "Hakee vaiheen selityksen tietokannasta hakusanalla",
        inputSchema: z.object({
          query: z.string().min(1).describe("Vaiheen nimi tai osa siitä"), 
        }),
      },
      async ({ query }) => {

        try {
          const selitykset = await haeVaiheenSelitys(query);
          if (selitykset.length === 0) {
            return { content: [{ type: "text", text: `Ei löytynyt selitystä hakusanalla "${query}"` }]};
            }
            const list = selitykset.map((s) => `${s}`).join("\n");
            return { content: [{ type: "text", text: list}] };

        } catch (error) {
          return {
            content: [{ type: "text", text: `Virhe tietokantahaussa: ${(error as Error).message}`}],
          };
        }
      }
    );

  // Tämä rivi antoi virhettä ilman tyyppimuunnosta? 
  await server.connect(transport as unknown as Transport);
  await transport.handleRequest(req, res);


    
  } catch (error) {
    console.log("Virhe MCP-pyynnössä: ", error);
    res.status(500).send("Internal server error");
    
  }
});


app.listen(PORT, () => {
  console.log(`MCP Express -palvelin käynnissä portissa ${PORT}`);
});
