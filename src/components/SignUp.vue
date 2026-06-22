<script setup>
import { ref } from 'vue'

const showPassword = ref(false)
const password = ref(null) //model

const confirmPassword= ref(null)
const showConfirm = ref(false)
const rules = {
    required: value => !!value || 'Required.', // if statement. the two vertical lines represent 'or'
    min: v => v.length >= 8 || 'Min 8 characters',
    passwordMatch: () => password == confirmPassword || 'Passwords must match'
  }
  
//data models
const firstname = ref(null)
const lastname = ref(null)
const email = ref(null)
const location = ref(null)
const phone = ref(null)
const address = ref(null)

function register()
{
    const data = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        phone: phone.value,
        location: location.value,
        address: address.value,
        password: password.value,
    }
    try{
        localStorage.setItem("user",JSON.stringify(data))
    }catch{
        console.log("Error Signing Up")
    }
}

</script>
<template>
    <v-container align = "center" class = "mt-16">
        <v-row>
            <v-col>
                <v-card max-width = "80%" class = "bg-secondary">
                    <v-form class = "mt-12 mb-6 mr-6">

                        <v-row>
                            <v-col md ="3">
                                <div> First Name</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field v-model = "firstname"></v-text-field>
                            </v-col>
                            <v-col md = "3">
                                <div>Last Name</div>
                            </v-col>
                            <v-col md = "3">
                                <v-text-field v-model = "lastname"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="3">
                                <div> Email</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field v-model = "email"></v-text-field>
                            </v-col>
                            <v-col md="3">
                                <div>Phone</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field type = "number"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md="3">
                                <div> Location</div>
                            </v-col>
                            <v-col md="3">
                                <v-select :items = "['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret',]" v-model = "location">

                                </v-select>
                            </v-col>
                            <v-col md="3">
                                <div>Address</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field v-address = "address"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md="3">
                                <div>PassWord</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field type = "password"></v-text-field>
                            </v-col>
                            <v-col md="3">
                                <div>
                                    <v-text-field 
                                v-model="confirmPassword"
                                :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min, rules.passwordMatch,]"
                                :type="showConfirm ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showConfirm = !showConfirm">
                                    </v-text-field>
                                </div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field 
                                v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword">
                            </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col md="6">
                                <v-btn @click = "register()">SignUp</v-btn>
                            </v-col>
                            <v-col md="6">
                            </v-col>
                            <v-col md="6">
                                <div>Already Have Account?

                                </div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field></v-text-field>
                            </v-col>
                        </v-row>

                        
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>