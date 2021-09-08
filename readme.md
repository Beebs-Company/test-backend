# Test backend beebs

## Objectif 

Créer une fonction js qui va calculer pour chaque **cart**, le montant à payer par carte bancaire (**payinAmount**).

## Calcul du prix à payer d'un **cart**
- Calculer le prix total des produits, un cart peut comprendre 1 ou plusieurs produits

- Sur le cart des frais sont appliqués. Les frais sont composés de :
  - La protection acheteur
    - une part fixe **FIXED_BUYER_FEE**
    - un pourcentage **VARIABLE_BUYER_FEE** appliqué à la somme des produits qui composent le cart.

  - Les frais de livraison
    - Les frais de port sont calculés à partir du poids du cart. Les frais de port peuvent être offert si :
      - la valeur du cart est supérieure à **FREE_SHIPPING_MIN_AMOUNT** 
      - si l'utilisateur possède des **shippingCredit**

- Si l'utilisateur a de l'argent dans porte-monaie (**walletBalance**), cet argent doit être utilisé en priorité et donc avant la carte bancaire
  - Exemple, si le total du prix du cart est 35€ et qu'il y a 20€ dans la wallet, le montant par cb sera de 15€.

## Les données

Les données sont fournies par l'api https://xubyxv3op5.execute-api.eu-west-1.amazonaws.com/dev/ qui expose les endpoints suivants :

- /carts  retourne la liste des carts à traiter
- /params retourne la liste des paramètres (**FREE_SHIPPING_MIN_AMOUNT**,  **FIXED_BUYER_FEE**, **VARIABLE_BUYER_FEE**)
- /pricings-by-weight retourne la liste des frais de port en fonction du poids
- /user/{id} retourne les informations du user **id**

## Résultat attendu 

La fonction doit retourner un tableau d'objet js avec le format suivant : 

```
[{ cartId, payinAmount }, ...]
```
