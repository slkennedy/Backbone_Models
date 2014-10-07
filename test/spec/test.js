/* global describe, it */

(function () {
    'use strict';

    describe('List Tests', function () {
        describe('Is there a list', function () {
            it('should have a list', function () {
            	var list = [];
            	expect(list).to.be.ok;
            });
            it('should have more than one item on the list', function (){
           		var list = [{name: 'Finish Project'}, {name: 'Eat Dinner'}];

            	expect($(list).length).to.be.above(1);
            })
            it('should have properties of name and done', function (){
            	var list = [{name: 'Finish Project', done: false}, {name: 'Eat Dinner', done:false}];

            	expect(list[0]).to.contain.keys('name', 'done');
            })
            it('should be inserted into the DOM', function () {
            	$(document).ready(function () {
            		var list = [{name: 'Finish Project', done: false}, {name: 'Eat Dinner', done:false}];
            	})

            	expect($('list')).to.be.ok;
            });
        });
    });
})();
