const AnalyticsService = {
    pushEvent: (event: string, data: any) => {
        window.dataLayer.push({
            event,
            ...data,
        })
    },
    pushPage: (page: string) => {
        window.dataLayer.push({
            event: "pageview",
            page
        })
    }

}

export default AnalyticsService
