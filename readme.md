# Test backend beebs

## Objectif 

Créer une fonction "batch" en js qui va calculer pour un ensemble de **cart** le montant restant à payer (**payinAmount**) par l'utilisateur en CB.

## Calcul du prix à payer d'un **cart**

- Sur le cart des frais sont appliqués. Les frais sont composés de :
  - une part fixe **FIXED_BUYER_FEE**
  - un pourcentage **VARIABLE_BUYER_FEE** appliqué à la somme des produits qui composent le cart.

- Les frais de port sont calculés à partir du poid du cart. Les frais de port peuvent être offert si :
  - la valeur du cart est supérieure à **FREE_SHIPPING_MIN_AMOUNT** 
  - si l'utilisateur possède des **shippingCredit**

- Si l'utilisateur a de l'argent dans porte-monaie (**walletBalance**), cet argent doit être utilisé

## Les données

Les données sont fournies par l'api https://xubyxv3op5.execute-api.eu-west-1.amazonaws.com/dev/ qui expose les endpoints suivants :

- /carts  retourne la liste des carts à traiter
- /params retourne la liste des paramètres 
- /pricings-by-weight retourne la liste des frais de port en fonction du poids
- /user/{id} retourne les informations du user **id**

## Résultat attendu 

La fonction doit retourner un tableau d'objet js avec le format suivant : 

```
[{ cartId, payinAmount }, ...]
```