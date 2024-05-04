import { Component, OnInit } from '@angular/core'; 

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import{RouterModule,Router}from'@angular/router';
import { HttpService } from '@budget-bites/shared/services/http-service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiConstant } from '@budget-bites/shared/utilites/app_constant/apiConstant';
import { RegistrationDetails } from '@budget-bites/shared/models/registration-details';

interface Food {
  value: string;
  viewValue: string;
}

@Component({ 
  selector: 'budget-bites-registration-form', 
  templateUrl: './registration-form.component.html', 
  styleUrls: ['./registration-form.component.scss'] 

}) 

export class RegistrationFormComponent implements OnInit { 

  personalDetailsFormGroup!: FormGroup; 
  contactDetailsFormGroup!: FormGroup; 
  dietaryPreferenceFormGroup!: FormGroup; 
  showInput:boolean=false;
  showCardFlag:boolean = false;
  duration:number =500;
  hide=true;
  showFlag:boolean=false;
  availableCuisines: string[] = ['Continental', 'Italian', 'Mexican', 'Chinese']; // Sample available cuisines
  selectedCuisines: string[] = []; 
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Vegetarian'},
    {value: 'pizza-1', viewValue: 'Non-vegetarian'},
    {value: 'Vegan-2', viewValue: 'Vegan'},
    {value: 'Paleo-3', viewValue: 'Paleo'},
    {value: 'Keto-4', viewValue: 'Keto'},
    {value: 'DASH (Dietary Approaches to Stop Hypertension)-5', viewValue: 'DASH (Dietary Approaches to Stop Hypertension)'},
    {value: 'Gluten-Free-6', viewValue: 'Gluten-Free'},
    {value: 'Eggeterian-7', viewValue: 'Eggetarian'}
  ];
  

  constructor(private formBuilder: FormBuilder ,private fromsModule : FormsModule, private router : Router,private httpService: HttpService,private snackBar: MatSnackBar) { } 
    ngOnInit(): void { 
    this.personalDetailsFormGroup = this.formBuilder.group({ 
      username: ['', Validators.required], //, Validators.required
      middleName:[''],
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required] ,
      password: [''], //, Validators.required
      confirmPassword: ['', Validators.required]

    }, { validators: this.passwordMatchValidator}); 

    this.contactDetailsFormGroup = this.formBuilder.group({ 
      email: ['', [Validators.required, Validators.email]], //, [Validators.required, Validators.email]  
      contactNumber: ['', Validators.required], 
      addressLineOne:['', Validators.required],
      addressLineTwo:['', Validators.required],
      city: ['', Validators.required], 
      state: ['', Validators.required],
      pincode:['', Validators.required],
      country:['', Validators.required],
    }); 

      this.dietaryPreferenceFormGroup = this.formBuilder.group({ 
      familyMembers: ['',[Validators.required, this.nonNegativeValidator] ], //, Validators.required
      dietaryPreference: [''], //no
      foodAllergies: [''], //no
      cusine:[''],
      termsAndConditions: [false, Validators.requiredTrue] 
    }); 

  } 

  

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null { 
    const password = control.get('password'); 
    const confirmPassword = control.get('confirmPassword'); 
    return password && confirmPassword && password.value !== confirmPassword.value ? { 'passwordMismatch': true } : null; 

  } 
 
  addCuisine(value: string) { if (value && value.trim() !== '')
     { this.selectedCuisines.push(value.trim()); // Optionally clear input field after adding cuisine //  cuisineInput.value = ''; 
} } 
    removeCuisine(cuisine: string) { 
      const index = this.selectedCuisines.indexOf(cuisine); 
      if (index !== -1) {
         this.selectedCuisines.splice(index, 1); 
        } 
      } 
 
       showCard() {
        this.showCardFlag = true;
        // Add event listener for click on the document body
        document.body.addEventListener('click', this.hideCard);
      }
      nonNegativeValidator(control: AbstractControl): { [key: string]: boolean } | null { 
        const value = control.value; if (value < 0) { return { negative: true }; // Return an object with a truthy value to indicate validation failure 
      } return null; // Return null if validation succeeds
     } 
     
      hideCard = (event: any) => {
     
        if (!event.target.closest('.shown-card') && !event.target.closest('.cusine-input') &&!event.target.closest('.chips') ) {
          this.showCardFlag = false;
          // Remove event listener after hiding the card
          document.body.removeEventListener('click', this.hideCard);
        }
      }
      getChipStyle(cuisine: string) { 
        const textLength = cuisine.length; 
        const minWidth = 60 + textLength *6 ; 
         return { 'min-width': `${minWidth}px` }; 
        } 
        toggleCuisine(cuisine: string) { 
          const index = this.selectedCuisines.indexOf(cuisine);
           if (index === -1) { 
            this.selectedCuisines.push(cuisine); 
          } 
          else {
             this.selectedCuisines.splice(index, 1); 
          }
        } 
           
        isSelected(cuisine: string): boolean { 
          return this.selectedCuisines.includes(cuisine); 
        } 
      
  
        onSubmit(): void { 
          if (this.dietaryPreferenceFormGroup.valid) { 
            this.router.navigate(['/user/login-form']); 
            // const formData: RegistrationDetails = { 
            //   ...this.personalDetailsFormGroup.value, 
            //   ...this.contactDetailsFormGroup.value, 
            //   ...this.dietaryPreferenceFormGroup.value }; 
            // this.httpService.post(ApiConstant.loginAuth, formData).subscribe(
            //   { next: (response: RegistrationDetails) => { 
            //      this.router.navigate(['/user/login-form']); 
                
            //   }, error: (error) => 
            //     { console.error('Error occurred while making API call:', error); 
            //     this.snackBar.open('An error occurred. Please try again later.', 'Close', { duration: 3000 }); 
            //   } 
            // }); 
          } 
        } 
  } 



 