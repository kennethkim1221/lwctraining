/* eslint-disable no-console */
/* eslint-disable no-debugger */
import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CustomerTile extends NavigationMixin(LightningElement)
{
    @api customer;
    @api object;
    @track navRef;
    
    get icon()
    {
        return 'standard:' + this.object.toLowerCase();
    }
    
    get alttext()
    {
        return (
            'Navigate to ' +
            this.object +
            ' record detail for ' +
            this.customer.name
        );
    }

    connectedCallback()
    {   
        // I think on this part, upon page load, we are generating a URL by defining what type of action will it do and 
        // also adding some attribute/param (URL params?) 
        // and then the last part is a .then, we use the url as a temp then modify the contents of navRef varialble to be equal to url 
        // (the retured generated URL) and so in HTML:   <a href={navRef} alt={alttext}>{customer.name}</a>, {navRef} is now a like a component itself
        this.customerRecordRef = {
            type: 'standard__recordPage',
            attributes: {
                recordId: this.customer.Id,
                actionName: 'view',
            },
        };
        
        this[NavigationMixin.GenerateUrl](this.customerRecordRef).then(
            url => (this.navRef = url),
        );
    }

    handleClick()
    {
        debugger;
        console.log('here!  1');

        const clickevt = new CustomEvent('customerselect', {
            detail: {
                customerId: this.customer.Id,
                sobjectType: this.object,
                state: this.customer.state,
            },
        });
        
        this.dispatchEvent(clickevt);
    }
}