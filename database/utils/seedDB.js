/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses. Information taken from wikipedia.com.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		imageUrl:"https://s29068.pcdn.co/wp-content/uploads/68th-street-campus-768x432.jpg",
		description: "Hunter College is one of the constituent colleges of the City University of New York, a public university in New York City. The college offers studies in more than one hundred undergraduate and postgraduate fields across five schools. It also administers Hunter College High School and Hunter College Elementary School."
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		imageUrl: "https://coursedog-images-public.s3.us-east-2.amazonaws.com/undefined/QNS01%20Clock-tower-image%20for%20catalog%20landing%20page.jpg",
		description: "Queens College is a public college in the Queens borough of New York City. It is part of the City University of New York system. Its 80-acre campus is primarily located in Flushing, Queens. It has a student body representing more than 170 countries."
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		imageUrl:"http://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg",
		description: "Brooklyn College is a public university in Brooklyn, New York. It is part of the City University of New York system and enrolls about 15,000 undergraduate and 2,800 graduate students on a 35-acre campus."
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Eric",
      	lastname: "Cartman",
	  	email: "kfclover@example.com",
		imageUrl:"https://images.squarespace-cdn.com/content/v1/5d025635e9e6f00001d604a6/1561427252699-2EMQCKUQ1J49MYTDGQ47/http-%253A%253Awww.comedycentral.com.au%253Asouth-park%253Avideos%253Athe-worst-of-eric-cartman-casa-bonita-clips.jpg?format=500w",
		gpa:2.5
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Kyle",
      	lastname: "Brovlovsky",
	  	email: "kyle.b@example.com",
		imageUrl:"https://cdn.shopify.com/s/files/1/0170/5859/4880/files/kyleOverlay_8e5d4359-e872-4ece-9122-65641a174082_1980x.png?v=1580502412",
		gpa:3.2
	});

	// Create a new student for a campus
	const dummy_student3 = await Student.create({
		firstname: "Butters",
      	lastname: "Scotch",
	  	email: "cutekittyislandadventure@example.com",
		imageUrl:"https://64.media.tumblr.com/cbf9cda59447e2b68c3172ca441fcde5/tumblr_inline_nzb9dburo31qlr65v_500.jpg",
		gpa:3.5
	});


	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;