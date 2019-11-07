({
    draftReservation : function(component, event, helper)
    {
        component.set("v.startDate", event.getParam("startDate"));
        component.set("v.endDays", event.getParam("endDays"));
        component.set("v.numberOfPeople", event.getParam("numberOfPeople"));
        component.set("v.requestedMarket", event.getParam("requestedMarket"));

        //attribute provided by the lightning:availableForFlowScreens interface
        // This will make the flow proceed to the next step
        var navigate = component.get("v.navigateFlow");
        navigate("NEXT");
    }
})