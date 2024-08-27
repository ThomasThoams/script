const Contact = require('./contact');

describe('Contact Model Test', () => {
    it('create & save contact successfully', async () => {
        const contactData = { firstname: 'John', lastname: 'Doe', email: 'john.doe@example.com' };
        const contact = new Contact(contactData);
        const savedContact = await contact.save();

        expect(savedContact._id).toBeDefined();
        expect(savedContact.firstname).toBe(contactData.firstname);
        expect(savedContact.lastname).toBe(contactData.lastname);
        expect(savedContact.email).toBe(contactData.email);
    });

    it('create contact without required field should fail', async () => {
        const contactWithoutRequiredField = new Contact({ lastname: 'Doe' });
        let err;
        try {
            await contactWithoutRequiredField.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(Error);
        expect(err.errors.firstname).toBeDefined();
        expect(err.errors.email).toBeDefined();
    });
});
