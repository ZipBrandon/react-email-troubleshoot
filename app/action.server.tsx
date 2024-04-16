import type { ActionFunction } from "@remix-run/node";
import React from "react";

import { Tailwind, Button, render } from "@react-email/components";


export const action: ActionFunction = async (args) => {
  const html = render(
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Button
        href="https://example.com"
        className="bg-brand px-3 py-2 font-medium leading-4 text-white"
      >
        Click me
      </Button>
    </Tailwind>

    ,
  );

  return new Response(html, { headers: { "content-type": `text/html` } });

};
