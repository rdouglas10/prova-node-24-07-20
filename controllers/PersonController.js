const PersonModel = require('../models/Person');

module.exports = {
    async addPerson(req, res) {

    	// Verify if the keys exists in object
    	if (!('name' in req.body) || !('username' in req.body) || !('email' in req.body)){
    		res.json({
    			// message: 'Parameters not found in object.',
    			status: 400
    		})
    	}

        //Let's create the data of the person entity
        const person = await PersonModel.create(req.body);
        
        if (person){
	        res.json({
            message: 'The persons data was recorded',
            person: person,
            status: 201,
	        })
	    }else{
	    	res.json({
	            message: 'An error occurred during registration...',
	            person: 'Erro',
	            status: 400,
	    	})
	    }	
    },


	async allPeople(req, res) {
        //Let's list the data of the person data
        const person = await PersonModel.find({
      deleted: false,
    });
        res.json({
            message: 'List of people',
            person: person,
            status: 200,
        })
    },


    async onePerson(req, res) {
        // Check prior to your findById call to see if id is a valid ObjectId or not like so
		if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
			//Let's list the register of the one person informed by parameter
			const person = await PersonModel.findById(
        	req.params.id
        );
		
			if (person){
				res.json({
	            message: 'Here is person!',
	            person: person,
	            status: 200,
		      })
			}else{
			    res.json({
	            message: 'Person not found!',
	            person: 'failure',
	            status: 404,
	          })
			}

		}else{
		    res.json({
            message: 'Person not found!',
            person: 'failure',
            status: 400,
        	})
		}
		
    },


    async updatePerson(req, res) {
    	// Check prior to your findById call to see if id is a valid ObjectId or not like so
    	if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    	  	const person = await PersonModel.findById(
        	req.params.id
          );

    	  	if (person){
	        	//Let's update the register of the one person informed by parameter
		        const update_person = await PersonModel.findByIdAndUpdate(
			      person.id,
			      req.body,
			      {useFindAndModify: false}
			    );

		        res.json({
		            message: 'Updated person register!',
		            person: update_person,
		        })
	    	}else{
	    		res.json({
	            message: 'Person not found!',
	            person: 'failure',
	            status: 404,
	        	})
	    	}

        }else{
		    res.json({
            message: 'Person not found!',
            person: 'failure',
            status: 400,
        	})
		}
    },


    async deletePerson(req, res) {
    	// Check prior to your findById call to see if id is a valid ObjectId or not like so:
    	if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
		  	const person = await PersonModel.findById(
        	req.params.id
          );
        
		  	if (person) {
        	//Let's delete a person informed by parameter
	        const deleted_person = await PersonModel.findByIdAndUpdate(
	        person.id,
	        {deleted: true,},
	        {useFindAndModify: false}	
	        );
	        res.json({
	            message: 'Deleted person!',
	            person: deleted_person.id,
	            status: 200,
	        })
	    	}else{
	    		res.json({
	            message: 'Person not found!',
	            person: 'failure',
	            status: 404,
	        	})
	    	}
	    }else{
		    res.json({
            message: 'Person not found!',
            person: 'failure',
            status: 400,
        	})
		}

	},



}

