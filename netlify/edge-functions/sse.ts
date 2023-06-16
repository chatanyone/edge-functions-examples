import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    const url = new URL(request.url);
    url.host = 'ai.fakeopen.com';

    if (url.pathname === '/') {
        return new Response("Built by JasonZeng")
    }
    const res = await fetch(new Request(url.href, request))

    return new Response(res.body, { headers: res.headers, status: res.status })

};
