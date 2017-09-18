import {Meteor} from 'meteor/meteor'
import { check } from 'meteor/check'
import Contacts from '../../lib/model/contact'

Meteor.methods({
    insertInput(inp) {
        check(inp, Object);
        Contacts.insert(inp);
    }
});
