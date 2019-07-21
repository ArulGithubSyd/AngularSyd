
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    calcPremiumForm: FormGroup;
    occupations = [];
    factors=[];
    submitted = false;
    premium: number;
    occRating: number;
    occFactor: number;
    deathPremium: any;
    todayDate: any;
    minDate: Date;
    maxDate: Date;
    constructor(private formBuilder: FormBuilder) { }

    // Form fields
    ngOnInit() {
        this.calcPremiumForm = this.formBuilder.group({
          name: ['', Validators.required],
          age: ['1', Validators.required],
          dob: ['', Validators.required],
          occupation: ['', Validators.required],
          dsi: ['', Validators.required]
        });

        this.occupations = this.getOccupations();
        this.factors = this.getFactors();
        this.minDate = new Date();
        this.maxDate = new Date();
        //this.minDate.setDate(this.minDate.getDate() - 36500);
        this.minDate.setFullYear(this.minDate.getFullYear() - 100);
        this.maxDate.setDate(this.maxDate.getDate());        
    } 

    // list of occupations with rating
    getOccupations() {
      return [
        { id: '1', name: 'Cleaner', rating: 3 },
        { id: '2', name: 'Doctor', rating: 1  },
        { id: '3', name: 'Author', rating: 2  },
        { id: '4', name: 'Farmer', rating: 4  },
        { id: '5', name: 'Mechanic', rating: 4 },
        { id: '6', name: 'Florist', rating: 3 }
      ];
    }

    // list of rating with factor
    getFactors()
    {
      return [
        { ratingId: '1', ratingDesc: 'Professional',factor: 1},
        { ratingId: '2', ratingDesc: 'Professional',factor: 1.25 },
        { ratingId: '3', ratingDesc: 'Professional',factor: 1.50 },
        { ratingId: '4', ratingDesc: 'Professional',factor: 1.75 }
      ];

    }

        //get rating based on occupation
        getFactorByOccupationId(id: number)
        {
          var occupationRec =  this.occupations.find(r=> r.id == id); 
          console.log(occupationRec.rating);       
          this.occFactor = this.getFactorByRatingId(occupationRec.rating);          
        }
      
        // get factor based on rating
        getFactorByRatingId(id: number)
        {
          var factorRec =  this.factors.find(f=> f.ratingId == id); 
          console.log(factorRec.factor);
          return factorRec.factor;
        }
    // get the form fields
    get f() { return this.calcPremiumForm.controls; }

    onSubmit() {
        this.submitted = true;
        

        // Check the validity of the form
        if (this.calcPremiumForm.invalid) {
            return;
        }   
          
        this.getFactorByOccupationId(this.calcPremiumForm.get('occupation').value);


        this.CalculateDeathPremium();
    }

    validateDOB()
    {
      
    }
     CalculateDeathPremium()
    {

      var factor = this.getFactorByOccupationId(this.calcPremiumForm.get('occupation').value);
      var dsi = this.calcPremiumForm.get('dsi').value;
      var age = this.calcPremiumForm.get('age').value;
      this.deathPremium = ((dsi * this.occFactor * age)/1000) * 12;    
      this.deathPremium = this.deathPremium.toPrecision(3);
      console.log(this.deathPremium);
    }
}

