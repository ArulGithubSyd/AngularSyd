
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { GetFactor } from './api/Get-factor.service';



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
    minDate: Date;
    maxDate: Date;
    ageIsValid: boolean;
    birthAge: number;
    api: GetFactor;
    constructor(private formBuilder: FormBuilder) { }

    // Form fields
    ngOnInit() {
        this.calcPremiumForm = this.formBuilder.group({
          name: ['', Validators.required],
          age: ['1', Validators.required],
          dob: ['', Validators.required],
          occupation: ['', Validators.required],
          dsi: ['', [Validators.required, Validators.min(50),Validators.max(500),Validators.pattern("^[1-9][0-9]{0,2}$")]]         
        });

        this.occupations = this.getOccupations();
        this.factors = this.getFactors();
        this.minDate = new Date();
        this.maxDate = new Date();
        //this.minDate.setDate(this.minDate.getDate() - 36500);
        this.minDate.setFullYear(this.minDate.getFullYear() - 100);
        this.maxDate.setDate(this.maxDate.getDate());   
        this.ageIsValid = false;           
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
        console.log(this.f);
        // Check the validity of the form
        
        if (this.calcPremiumForm.invalid) {
            return;
        }          
        
        this.ValidateDOB();
        if(!this.ageIsValid)
        {
         alert("Given age:" + this.calcPremiumForm.get('age').value + " and age as of Date of birth:"+ this.birthAge + " do not match. Please correct");
         //confirm(" Test ");
         return
        }

        console.log(this.f);
        this.CalculateDeathPremium();
    }

    ValidateDOB()
    {
      var dob = new Date(this.calcPremiumForm.get('dob').value);  
      var now = new Date();   
      var nowMonth = now.getUTCMonth() + 1; 
      var nowDay   = now.getUTCDate();
      var nowYear  = now.getUTCFullYear();      
      
      var dobMonth=dob.getUTCMonth();
      var dobDay = dob.getUTCDate();
      var dobYear = dob.getUTCFullYear();
      
      this.birthAge = nowYear - dobYear - 1;
      
      if( nowMonth>=dobMonth) 
          if(nowDay >= dobDay)
          this.birthAge += 1 ;
      
      var age = this.calcPremiumForm.get('age').value;
      if(age != this.birthAge ){
       this.ageIsValid = false;        
      }
      else
      this.ageIsValid = true;
    }

     CalculateDeathPremium()
    {
      var occId = this.calcPremiumForm.get('occupation').value;
      
      var dsi = this.calcPremiumForm.get('dsi').value;
      var age = this.calcPremiumForm.get('age').value;
      this.getFactorByOccupationId(occId);
     
      //this.api.getFactor(occId).subscribe((factor: any) => {
       // if (factor) {
     //     test = factor;
     //});
      this.deathPremium = ((dsi * this.occFactor * age)/1000) * 12;    
      //this.deathPremium = this.deathPremium.toPrecision(3);
      
    }
  
}



