package main

import (
	"encoding/json"
	"log"
	"net/http"
	"fmt"
	"github.com/rs/cors"
)

type Product struct {
	ID    string  `json:"id"`
	Name  string  `json:"name"`
	Price float64 `json:"price"`
}

var products = []Product{
	{ID: "1", Name: "Product 1", Price: 10.00},
	{ID: "2", Name: "Product 2", Price: 20.00},
	{ID: "3", Name: "Product 3", Price: 30.00},
}

func getProducts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(w).Encode(products)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/products", getProducts)
	fmt.Println("Starting server")
	handler := cors.Default().Handler(mux)
	err := http.ListenAndServe(":8080", handler)	
	if err != nil {
		fmt.Println("Fatal Error")
		log.Fatal(err)
	}	
}
