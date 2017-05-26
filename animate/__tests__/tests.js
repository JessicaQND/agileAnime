var should = require("should");
var mongoose = require("mongoose");
var members = require("../controller/members.js");
var profile = require("../views/profile.jade");
var users = require("../model/members.js");
var login = require("../views/login.jade");
var db;

describe("Updating User Details", function() {

	before(function(done){
		db = mongoose.connect(dbURI);
		done();
	});

	after(function(done){
		mongoose.connection.close();
		done();
	});

	beforeEach(function(done){
		var person = new member({
				firstname: "Biggy",
				lastname: "Smalls",
				age: "19",
				username: "bigbutsmall",
				password: "sm477butBIG",
				int1: "Kill la Kill",
				int2: "One Punch Man",
				int3: "Hellsing"});
    person.save(function(error){
			if (error) console.log("error" + error.message);
			else console.log("no error");
			done();
		});
		profile.update.firstname.value = "Smallie";
		profile.update.lastname.value = "Biggs";
		profile.update.age.value = "20";
		profile.update.int1.value = "Ouran High School Host Club";
		profile.update.int2.value = "Samurai X";
		profile.update.int3.value = "Neon Genesis Evangelion";
		login.username.value = "bigbutsmall";
		login.password.value = "sm477butBIG"
		});

	it("updating first name", function(done){
		members.updateFirstName();
		users.findOne({ username: "bigbutsmall"}), function(err, person) {
			person.firstname.should.eql("Smallie");
			console.log("		fistname: ", person.username);
			done();
		});

		it("updating last name", function(done){
			members.updateLastName();
			users.findOne({ username: "bigbutsmall"}), function(err, person) {
				person.lastname.should.eql("Biggs");
				console.log("		lastname: ", person.username);
				done();
			});

		it("updating age", function(done){
			members.updateAge();
			users.findOne({ username: "bigbutsmall"}), function(err, person) {
				person.age.should.eql("20");
				console.log("		age: ", person.username);
				done();
			});

		it("updating first interest", function(done){
			members.updateInt1();
			users.findOne({ username: "bigbutsmall"}), function(err, person) {
				person.int1.should.eql("Ouran High School Host Club");
				console.log("		int1: ", person.username);
				done();
			});

	it("updating second interest", function(done){
		members.updateInt2();
		users.findOne({ username: "bigbutsmall"}), function(err, person) {
			person.int2.should.eql("Samurai X");
			console.log("		int2: ", person.username);
			done();
		});

	it("updating third interest", function(done){
		members.updateInt3();
		users.findOne({ username: "bigbutsmall"}), function(err, person) {
			person.int2.should.eql("Neon Genesis Evangelion");
			console.log("		int3: ", person.username);
			done();
		});
	});

		afterEach(function(done) {
			profile.update.firstname.value = null;
			profile.update.lastname.value = null;
			profile.update.age.value = null;
			profile.update.int1.value = null;
			profile.update.int2.value = null;
			profile.update.int3.value = null;
			login.username.value = null;
			login.password.value = null;
			users.remove({}, function(){
				done();
			});
		});

});
