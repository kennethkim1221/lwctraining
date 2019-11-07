import { LightningElement, api, track } from 'lwc';

export default class reservationHelperForm extends LightningElement
{
    @api customerid;
    @api objecttype;
    @track currentstate;
    @api
    get state()
    {
        return this.currentstate;
    }
    
    set state(value)
    {
        this.currentstate = value;
    }
    
    @track customerFields = [];

    get detailsLoaded()
    {
        return this.customerFields.length > 0 ? true : false;
    }

    handleDetails(event)
    {
        this.customerFields = event.detail;
    }

    // this handles the changes when the user changed some data on the customer detail form
    handleCustomerUpdate(event)
    {
        if (this.currentstate !== event.detail)
        {
            this.currentstate = event.detail;
        }
    }

    // this will handle the event fired from the reservation detail form when the user selected draft
    handleDraftReservation(event)
    {
        this.dispatchEvent(
            new CustomEvent('draftreservation', { detail: event.detail }),
        );
    }
}