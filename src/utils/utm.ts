interface Utm {
    campaign: string;
    medium?: string;
    source?: string;
}

const DEFAULT_SOURCE = "landing_utopicx";
const DEFAULT_MEDIUM = "web_link";

export const hrefWithUtm = (url: string, utm: Utm) => {
    if (!utm.source) {
        utm.source = DEFAULT_SOURCE;
    }
    if (!utm.medium) {
        utm.medium = DEFAULT_MEDIUM;
    }
    let urlObject = new URL(url);
    let params = new URLSearchParams(urlObject.search);
    params.set("utm_source", utm.source);
    params.set("utm_medium", utm.medium);
    params.set("utm_campaign", utm.campaign);
    return urlObject.origin + urlObject.pathname + "?" + params.toString();
};
