
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Customer } from '../models/customer.model'; 
import { Occupation } from '../models/occupation.model';


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
    
    constructor(private formBuilder: FormBuilder) { }

    // Form fields
    ngOnInit() {
        this.calcPremiumForm = this.formBuilder.group({
          name: ['', Validators.required],
          age: ['', Validators.required],
          dob: ['', Validators.required],
          occupation: ['', Validators.required],
          dsi: ['', Validators.required]
        });

        this.occupations = this.getOccupations();
        this.factors = this.getFactors();
       
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

    // get the form fields
    get f() { return this.calcPremiumForm.controls; }

    onSubmit() {
        this.submitted = true;
        
        // Check the validity of the form
        if (this.calcPremiumForm.invalid) {
            return;
        }   
          
        this.CalculateDeathPremium();
    }

     CalculateDeathPremium()
    {

     alert('calcPremiumForm');
    }
}

