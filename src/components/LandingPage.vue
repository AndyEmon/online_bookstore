<script setup>
</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <v-carousel>
                    <v-carousel-item src = "/car1.jpg"></v-carousel-item>
                    <v-carousel-item src = "/car2.jpg"></v-carousel-item>
                    <v-carousel-item src = "/car3.jpg"></v-carousel-item>
                    <v-carousel-item src = "/car4.jpg"></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>
    <!-- About us -->
     <v-contaniner class = "bg-secondary" max width = "100%">
        <v-row>
            <v-col clas = "text-center">
                <div class = "text display medium mb-12">WELCOME TO RAMSEY BOOKSTORE</div>
                <div class = "text body large front-weight-light mb-8">
                    Ramsey bookstore is a family owned business that has been serving the community for 



                </div>
            </v-col>
        </v-row>
     </v-contaniner>
     <!-- Our Best sellers -->
      <v-container class = "bg-light" max-width = "100%">
        <v-row>
            <v-col md = "3">
                <v-card>
                    <v-img src = "#" cover></v-img>
                    <v-card-title>The Picture of Dorian Gray</v-card-title>
                    <v-card-subtitle>2000</v-card-subtitle>
                    <v-btn to = "/cart" color = "primary">Add to cart</v-btn>
                </v-card>
            </v-col>

            <v-col md = "3">
                <v-card>
                    <v-img src = "#" cover ></v-img>
                        <v-card-title>Rachael Hollins</v-card-title>
                        <v-card-subtitle>1800</v-card-subtitle>
                        <v-btn to = "/cart" color = "primary">Add to cart</v-btn>
                </v-card>
            </v-col>

            <v-col md = "3">
                <v-card>
                    <v-img src = "#" cover></v-img>
                    <v-card-title>How innovation works</v-card-title>
                    <v-card-subtite>1200</v-card-subtite>
                    <v-btn to = "/cart" color = "primary">Add to cart</v-btn>
                </v-card>
            </v-col>
        </v-row>
      </v-container>

      <!-- Footer -->
       <v-container class = "bg-primary" max width = "100%">
        <v-row>
            <v-co>
                <div alin = "center">
                    <router-link to = "/">
                        <v-img src = "/log.png" width = "50%"></v-img>
                    </router-link>

                    <p> Copyright Ramsey Online Bookstore &copy; 2026</p>
                </div>
            </v-co>
            <v-col md = "4">
                <div class = "text-center">
                    <p>Follow us on:</p>
                    <v-icon icon = "mdi-instagram"></v-icon>
                    <v-icon icon = "mdi-twitter"></v-icon>
                    <v-icon icon = "mdi-facebook"></v-icon>
                </div>
            </v-col>
        </v-row>
       </v-container>
</template>