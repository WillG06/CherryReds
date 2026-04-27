// Cherry Reds — full menu data, structured for elegant rendering.
export type Item = { name: string; price?: string; desc?: string; tags?: string[] };
export type Group = { title: string; note?: string; items: Item[] };
export type Section = { id: string; kicker: string; title: string; intro?: string; groups: Group[] };

export const allergyNote =
  "If you suffer from a severe allergy we cannot recommend any of our dishes. We can make food without certain ingredients and use designated equipment, but cannot guarantee a 'free from' environment. Please tell us about any dietary requirements when ordering — an allergen menu is on the bar. v · veggie  vg · vegan  ng · no gluten-containing ingredients  (vga / nga) means it can be made that way on request.";

export const foodSections: Section[] = [
  {
    id: "pancakes",
    kicker: "Served all day",
    title: "Homemade American Pancakes",
    intro: "Triple stack of buttermilk or vegan pancakes & a jug of real maple syrup.",
    groups: [
      {
        title: "Pancakes",
        items: [
          { name: "Simple Triple Stack", price: "£6.50", desc: "Add your own toppings.", tags: ["v", "vga"] },
          { name: "Hero Triple Stack", price: "£13.90", desc: "Vegan sausages, scrambled turmeric tofu, hash brown.", tags: ["v", "vga"] },
          { name: "The Loaded Pancake Breakfast", price: "£16.00", desc: "Two pork sausages, two bacon rashers, scrambled eggs, hash brown." },
          { name: "Pistachio Chocolate Cheesecake", price: "£15.50", desc: "Smashed cheesecake, chocolate chips, rich pistachio sauce.", tags: ["v"] },
          { name: "Strawberry Wafer", price: "£12.50", desc: "Fresh strawberries, pink filled wafers, ice cream, strawberry sauce.", tags: ["v", "vga"] },
          { name: "Blueberry Granola", price: "£14.50", desc: "Fresh blueberries, coconut yoghurt, maple banana granola.", tags: ["v", "vga"] },
        ],
      },
    ],
  },
  {
    id: "breakfast",
    kicker: "Served all day",
    title: "Breakfast Sandwiches & English Breakfast",
    intro: "'Buttered' granary sliced, bap, bagel or wrap. The English breakfasts are discounted set bundles — no swaps please.",
    groups: [
      {
        title: "Breakfast Sandwiches",
        items: [
          { name: "Pork sausages / Vegan sausages / Thick cut bacon", price: "£5.50", tags: ["nga", "vg (nga)"] },
          { name: "Plant Based Breakfast Wrap", price: "£9.50", desc: "Falafel, vegan feta, cherry tomato salsa, mushrooms, spinach.", tags: ["vg"] },
          { name: "Cherry's Breakfast Bagel", price: "£8.50", desc: "Pork sausages, thick bacon, fried egg." },
          { name: "Veggie Breakfast Bagel", price: "£8.50", desc: "Vegan sausages, halloumi, fried egg.", tags: ["v"] },
        ],
      },
      {
        title: "English Style Breakfast",
        items: [
          { name: "The Big Red Breakfast", price: "£16.00", desc: "Two pork sausages, two bacon, two fried eggs, granary toast, beans, mushrooms, cherry toms, hash brown." },
          { name: "Hearty English", price: "£11.00", desc: "Pork sausage, thick bacon, fried egg, granary toast, beans, mushrooms, cherry toms, hash brown.", tags: ["nga"] },
          { name: "Hearty Veggie", price: "£11.00", desc: "Vegan sausage, halloumi, fried egg, mushrooms, beans, granary toast, hash brown, cherry toms.", tags: ["v", "ng"] },
          { name: "Hearty Vegan", price: "£11.00", desc: "Vegan sausage, scrambled turmeric tofu, beans, mushrooms, wilted spinach, 'buttered' toast, cherry toms, hash brown.", tags: ["vg", "nga"] },
          { name: "Diddy English", price: "£7.50", desc: "Pork sausage, bacon, fried egg, beans, buttered toast.", tags: ["nga"] },
          { name: "Diddy Veggie", price: "£7.50", desc: "Vegan sausage, halloumi, fried egg, beans, buttered toast.", tags: ["v", "nga"] },
          { name: "Scrambled Egg or Turmeric Tofu on Toast", price: "£5.50", tags: ["vga", "nga"] },
          { name: "Granola Sundae", price: "£7.50", desc: "Maple banana granola, blueberries, coconut yoghurt.", tags: ["ng", "vg"] },
          { name: "Protein Power", price: "£14.00", desc: "Salmon fillet, guac, fried egg, tenderstem broccoli, spinach.", tags: ["ng"] },
        ],
      },
      {
        title: "Extra Toppings",
        note: "Add any of these to a breakfast, sandwich or pancakes.",
        items: [
          { name: "Pork or vegan sausage · Guacamole · Halloumi · Scrambled egg or tofu · Fresh blueberries · Fresh strawberries · Pistachio sauce", price: "£2.20" },
          { name: "Thick cut bacon · Fried egg · Black pudding · Strawberry jam jar · Ice cream (dairy/non) · Strawberry sauce", price: "£1.80" },
          { name: "Mushrooms · Hash brown · Spinach · Baked beans · Trade up to scrambled egg · Cherry tomatoes · Whipped cream", price: "£1.40" },
        ],
      },
    ],
  },
  {
    id: "lunch",
    kicker: "From midday",
    title: "Lunch Sandwiches & Sides",
    groups: [
      {
        title: "Sandwiches",
        items: [
          { name: "Ultimate Grilled Cheese", price: "£9.50", desc: "Halloumi, cheddar, red Leicester & mozzarella with tomato chutney on granary.", tags: ["v", "nga"] },
          { name: "Fish or Fish-like Fingers", price: "£5.50", desc: "Mayo, lettuce, on a bap.", tags: ["vga"] },
          { name: "Ham & Mustard", price: "£5.50", desc: "Thick cut ham, American mustard, lettuce, on sliced granary.", tags: ["nga"] },
          { name: "Southern Fried Chicken Wrap", price: "£8.50", desc: "Breaded chicken fillets, slaw, BBQ, lettuce.", tags: ["vga"] },
        ],
      },
      {
        title: "Sides",
        items: [
          { name: "Proper Chips", price: "£3.50", tags: ["vg", "nga"] },
          { name: "New Potatoes", price: "£3.50", tags: ["vg", "ng"] },
          { name: "Pot of Slaw", price: "£2.50", tags: ["vg", "ng"] },
          { name: "Beer Battered Onion Rings", price: "£3.50", tags: ["vg"] },
          { name: "Houmous Pot & Veg Sticks", price: "£4.50", tags: ["vg", "ng"] },
          { name: "Mozzarella Sticks w/ Tomato Relish", price: "£5.00" },
          { name: "Corn on the Cob", price: "£2.50", tags: ["vg", "ng"] },
        ],
      },
    ],
  },
  {
    id: "mains",
    kicker: "From midday",
    title: "Hearty Mains",
    groups: [
      {
        title: "Mains",
        items: [
          { name: "Gammon, Egg & Chips", price: "£14.50", desc: "Grilled gammon steak, 2 fried eggs, our proper chips, leaves.", tags: ["nga"] },
          { name: "Plant Based Chorizo & Halloumi Hash", price: "£14.50", desc: "Spicy sausage, halloumi, fried new potatoes, fried egg, spinach, peppers.", tags: ["v", "nga", "vga"] },
          { name: "Salmon Fillet", price: "£14.50", desc: "Pan cooked, buttered new potatoes, tenderstem broccoli, parsley sauce.", tags: ["nga"] },
          { name: "Mexican Style Watermelon Salad", price: "£13.50", desc: "Watermelon, vegan feta, cherry tomato salsa, guac, leaves, lime, chilli & agave dressing, home-fried nacho crisps.", tags: ["vg", "nga"] },
        ],
      },
      {
        title: "Friday Chippy Takeover · From 5pm",
        note: "Freshly battered fish, rotating veggie & vegan options, signature proper chips and all the trimmings.",
        items: [],
      },
      {
        title: "For Kids (under 11)",
        items: [
          { name: "Two Chicken Strips · Pork or Vegan Sausage · Two Fish or Fish-like Fingers", price: "£6.00", desc: "All with chips & beans, or new pots & veg sticks." },
          { name: "Pancake with Scrambled Egg, Sausage or Strawberries", price: "£6.00", tags: ["vga"] },
        ],
      },
    ],
  },
  {
    id: "sharers",
    kicker: "From midday",
    title: "Sharers",
    groups: [
      {
        title: "Platters & Loaded",
        items: [
          { name: "Plant Based Platter", price: "£16.50", desc: "Crispy cauliflower, 'chicken' strips, falafel, proper chips, houmous, veg sticks. Big meal for 1, lunch for 2, snack for 3.", tags: ["vg"] },
          { name: "BBQ Sharers Platter", price: "£16.50", desc: "Chicken strips, mozzarella sticks, onion rings, proper chips, grilled corn, slaw." },
          { name: "Classic Loaded Chips", price: "£8.50", desc: "Bacon, melted cheese, sour cream, chives.", tags: ["nga"] },
          { name: "Cajun Loaded Chips", price: "£8.50", desc: "Peppers, shaved corn, onions, Em's scotch bonnet mayo.", tags: ["vg", "nga"] },
          { name: "Home-fry Nachos", price: "£9.50", desc: "Cheese sauce, cherry tomato salsa, jalapeños, guac, sour cream.", tags: ["v"] },
        ],
      },
    ],
  },
  {
    id: "burgers",
    kicker: "From midday",
    title: "Burgers",
    intro: "All served in a freshly baked bun on a lettuce base, with proper chips & homemade slaw. Hereford beef patties available as plant-based pea protein alternative.",
    groups: [
      {
        title: "Burgers",
        items: [
          { name: "Buttermilk 'Chicken' Style", price: "£13.50", desc: "Patty in a freshly baked bun with lettuce & mayo.", tags: ["vg"] },
          { name: "Classic Smashed", price: "£13.50", desc: "Handmade Hereford lean beef, tomato relish.", tags: ["nga", "vga"] },
          { name: "Spice is Life", price: "£15.50", desc: "Beef patty, 'chorizo' sausage, onion, Em's scotch bonnet mayo.", tags: ["nga", "vga"] },
          { name: "Go Greek", price: "£15.50", desc: "Beef patty, plant based feta, houmous, roast peppers.", tags: ["nga", "vga"] },
          { name: "New Yorker On a Bagel!", price: "£16.50", desc: "Beef patty, bacon, melty cheese, gherkin, relish, onion rings." },
          { name: "Double up your beef patty", price: "+£4.00" },
        ],
      },
    ],
  },
  {
    id: "cakes",
    kicker: "Daily bakery",
    title: "Homemade Cakes",
    intro: "See the cabinet on the downstairs bar for today's selection — including no-gluten and vegan options.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Assorted Homemade Cakes", price: "from £4.50" },
          { name: "Add whipped cream", price: "75p", tags: ["vg", "ng"] },
          { name: "Add a scoop of vanilla ice cream", price: "£1.25", tags: ["v", "ng", "vg"] },
        ],
      },
    ],
  },
];

export const drinksSections: Section[] = [
  {
    id: "hot",
    kicker: "Hot Drinks",
    title: "Coffee, Tea & Chocolate",
    intro: "Our non-dairy alternative is oat milk. Decaf available on all coffees.",
    groups: [
      {
        title: "Tea",
        items: [
          { name: "Mug of Fairtrade Tea with Milk", price: "£2.20" },
          { name: "Posh Teas in a Mug", price: "£2.90", desc: "Birchall English Breakfast, Earl Grey, Red Fruit & Flower, Camomile, Green, Redbush, Decaf, Peppermint, Lemon & Ginger." },
          { name: "Tea People Social Enterprise Teas", price: "£2.90", desc: "Pineapple Matcha, Bombay Chai, Coconut Rose Green, Chocolate Mint Redbush." },
          { name: "Matcha Latte", price: "£4.00" },
          { name: "Chai Latte", price: "£3.90", desc: "Chai blend, hot milk, cinnamon." },
        ],
      },
      {
        title: "Freshly Ground Coffee",
        items: [
          { name: "Americano · Espresso", price: "£3.20" },
          { name: "Latte · Flat White · Cappuccino", price: "£3.70" },
          { name: "Mocha", price: "£4.00" },
          { name: "Iced Latte with Syrup", price: "£3.70" },
          { name: "Frappé", price: "£5.90", desc: "Your choice of syrup, blended with iced espresso & ice cream." },
          { name: "Affogato", price: "£4.50" },
          { name: "Peach Iced Black Tea / Mint Iced Green Tea", price: "£3.90" },
        ],
      },
      {
        title: "Hot Chocolate",
        items: [
          { name: "Regular Cadbury's", price: "£3.70" },
          { name: "3Cs — Cinnamon, Chilli", price: "£3.90" },
          { name: "Deluxe", price: "£4.90", desc: "Whipped cream, marshmallows." },
          { name: "White Hot Chocolate", price: "£3.90" },
          { name: "Sweetie Bird Syrups", price: "90p", desc: "Caramel, Hazelnut, Vanilla, Salted Caramel, sugar-free Vanilla & Caramel." },
          { name: "Whipped Cream (dairy or non)", price: "£1.20" },
        ],
      },
    ],
  },
  {
    id: "soft",
    kicker: "Soft & Long Drinks",
    title: "Juices, Pop & Milkshakes",
    groups: [
      {
        title: "Juices & Pop",
        items: [
          { name: "Frobishers Bumbleberry / Grapefruit / Pineapple", price: "£3.50" },
          { name: "Pago Tomato or Cranberry", price: "£2.90" },
          { name: "Eager Orange or Apple", price: "£3.00" },
          { name: "Hartridges Apple & Raspberry", price: "£3.20" },
          { name: "Hartridges Ginger Beer / Lemonade / Elderflower", price: "£3.20" },
          { name: "Gusto Curiosity Cola / Cherry Cola", price: "£3.20" },
          { name: "Soda Folk Root Beer or Cherry Soda", price: "£3.20" },
          { name: "Red Bull", price: "£2.90" },
          { name: "Orangina", price: "£3.20" },
          { name: "Cano Mineral Water (still or fizzy)", price: "£2.50" },
          { name: "Draught Cola", price: "glass £3 / pint £4" },
          { name: "Diet Cola or Lemonade", price: "glass £2.90 / pint £3.90" },
          { name: "Root Beer Float", price: "£4.70" },
        ],
      },
      {
        title: "Milkshakes",
        note: "Blended with dairy or vegan ice cream.",
        items: [
          { name: "Vanilla, Strawberry, Banana, Chocolate, Mint, Salted Caramel, Cherry, Peach, Hazelnut", price: "£4.90" },
        ],
      },
      {
        title: "Boozy Milkshakes",
        note: "Dairy or vegan ice cream & whipped cream.",
        items: [
          { name: "Bourbon Vanilla", price: "£8.50", desc: "Maker's Mark, Vanilla." },
          { name: "Bliss", price: "£8.90", desc: "Baileys, white chocolate, strawberry. Not available vegan." },
          { name: "Night Sky Mocha", price: "£8.50", desc: "Kahlua, chocolate." },
          { name: "Pirate's Life", price: "£8.50", desc: "Barti plant-based cream rum liqueur, salted caramel." },
        ],
      },
      {
        title: "Mocktails",
        items: [
          { name: "Botanic Fizz", price: "£4.50", desc: "Wildjac alcohol-free gin, apple juice, soda, lime." },
          { name: "Shirley Temple", price: "£3.50", desc: "Fevertree ginger, grenadine, cherry garnish." },
          { name: "Virgin Mary", price: "£4.50", desc: "Tomato juice spiced with Tabasco & Worcester, lemon & celery." },
        ],
      },
    ],
  },
  {
    id: "beer",
    kicker: "Beer & Cider",
    title: "On Draught & In Bottles",
    intro: "Most beers are rotated guests — see the draught list and beer fridges on the downstairs bar.",
    groups: [
      {
        title: "Permanently on Keg",
        items: [
          { name: "Attic Brew Co Pilsner Lager (4.2%)", price: "½ £3.10 / pt £6.20", tags: ["vg", "ng"] },
          { name: "Freedom Four Premium British Lager (4%)", price: "½ £2.95 / pt £5.90", tags: ["vg"] },
          { name: "Twisted Barrel Pixel Juice Pale (4%)", price: "½ £3.25 / pt £6.50", tags: ["vg"] },
          { name: "Weihenstephaner Wheat (5.4%)", price: "½ £3.45 / pt £6.90", tags: ["vg"] },
          { name: "Rodenbach Fruitage (3.4%)", price: "½ £3.95 / pt £7.20", tags: ["vg"] },
          { name: "Hogan's Cider (4.5%)", price: "½ £3.10 / pt £6.20", tags: ["vg"] },
          { name: "Local Rotating Stout", price: "varies" },
        ],
      },
      {
        title: "Cask",
        items: [
          { name: "Birmingham Brewing Co Pale (4%)", price: "½ £2.45 / pt £4.90", tags: ["vg", "ng"] },
          { name: "Local Rotating Cask Ales", price: "varies" },
        ],
      },
      {
        title: "Bottled & Canned",
        note: "A selection — full list on the downstairs bar.",
        items: [
          { name: "B'ham Brewing Stirchley Lager (4.4%) · 33cl", price: "£5.20", tags: ["vg", "ng"] },
          { name: "Modelo Especial (4.5%) · 355ml", price: "£5.20", tags: ["vg"] },
          { name: "Augustiner Edelstoff (5.6%) · 50cl", price: "£6.50", tags: ["vg"] },
          { name: "Wiper & True No Alcohol Lager (0.5%) · 44cl", price: "£5.90", tags: ["vg"] },
          { name: "Blanche de Bruxelles (4.5%) · 33cl", price: "£5.50", tags: ["vg"] },
          { name: "Früh Kölsch (4.8%) · 50cl", price: "£5.90", tags: ["vg"] },
          { name: "Attic Brew Intuition Hazy Pale (4.4%) · 44cl", price: "£6.20", tags: ["vg"] },
          { name: "B'ham Brewing Stout (4.8%) · 33cl", price: "£5.20", tags: ["vg", "ng"] },
          { name: "Wiper & True Milkshake Milk Stout (5.6%) · 44cl", price: "£6.20", tags: ["v"] },
          { name: "La Trappe Blonde (6.5%) · 33cl", price: "£6.20", tags: ["vg"] },
          { name: "Delirium Tremens (8.4%) · 33cl", price: "£7.50", tags: ["vg"] },
          { name: "St. Bernardus ABT 12 (10%) · 33cl", price: "£7.90", tags: ["vg"] },
          { name: "Schöfferhofer Grapefruit (2.5%) · 50cl", price: "£4.90", tags: ["vg"] },
          { name: "Sam Smiths Cherry (5%) · 35cl", price: "£5.20", tags: ["vg"] },
          { name: "Boon Kriek (4%) · 375ml", price: "£7.00", tags: ["vg"] },
        ],
      },
      {
        title: "Bottled Ciders",
        items: [
          { name: "Hogan's Vintage Pear (5.4%) · 50cl", price: "£6.90", tags: ["vg", "ng"] },
          { name: "Saxby's Medium Apple / Plum / Cherry (3.8%) · 50cl", price: "£6.50", tags: ["vg", "ng"] },
          { name: "Howie's Grapefruit / Peach (3.4%) · 50cl", price: "£6.70", tags: ["vg", "ng"] },
          { name: "Hogan's Wild Elder (4%) · 50cl", price: "£6.90", tags: ["vg", "ng"] },
          { name: "Aspall's (5%) · 33cl", price: "£6.20", tags: ["vg", "ng"] },
          { name: "Hogan's High Sobriety (1%) · 50cl", price: "£6.20", tags: ["vg", "ng"] },
        ],
      },
    ],
  },
  {
    id: "spirits",
    kicker: "Spirits",
    title: "Gins, Vodkas, Rums & Whiskies",
    intro: "All vegan except Baileys. All gluten-free. 50p off the price of two for a double take.",
    groups: [
      {
        title: "Gin (25ml)",
        items: [
          { name: "Dr Eamer's Dry Gin", price: "£4.50" },
          { name: "Roku Japanese Gin", price: "£5.00" },
          { name: "Wildjac English Summer Grapefruit Lime", price: "£4.60" },
          { name: "Stratford Rhubarb Pink", price: "£4.90" },
          { name: "Stratford Mulberry Sloe Gin", price: "£4.50" },
          { name: "Warner's Raspberry Pink", price: "£4.50" },
          { name: "Wildjac Botanical Spirit (no alcohol)", price: "£3.00" },
        ],
      },
      {
        title: "Vodka & Rum (25ml)",
        items: [
          { name: "Stolichnaya Red Vodka", price: "£4.20" },
          { name: "Cotswold Toffee Vodka", price: "£4.90" },
          { name: "Burning Barn Spiced", price: "£4.50" },
          { name: "Appleton Kingston Dark / White", price: "£4.50" },
          { name: "Old J Vanilla Spiced / Cherry Spiced", price: "£4.90" },
          { name: "Koko Kanu Coconut", price: "£4.20" },
        ],
      },
      {
        title: "Tequila & Shots (25ml)",
        items: [
          { name: "El Jimador Gold / Silver", price: "£4.20" },
          { name: "White Sambuca", price: "£4.20" },
          { name: "Cazcabel Coconut, Honey or Coffee", price: "£4.50" },
          { name: "Tapatio Reposado", price: "£5.00" },
          { name: "Jägermeister", price: "£4.50" },
        ],
      },
      {
        title: "Brandy, Liqueur & Fortified",
        items: [
          { name: "Courvoisier VS (25ml)", price: "£4.20" },
          { name: "Southern Comfort (25ml)", price: "£3.90" },
          { name: "Luxardo Amaretto (25ml)", price: "£4.20" },
          { name: "Kahlua Coffee (25ml)", price: "£3.90" },
          { name: "Bailey's Irish Liqueur (50ml)", price: "£4.50" },
          { name: "Barti Plant-Based Cream (25ml)", price: "£4.50" },
          { name: "Aperol Aperitivo (25ml)", price: "£4.20" },
          { name: "Cockburn's Port (50ml)", price: "£4.50" },
        ],
      },
      {
        title: "Whisk(e)y (25ml)",
        items: [
          { name: "Jameson's Blended Irish", price: "£4.20" },
          { name: "Jack Daniel's", price: "£4.20" },
          { name: "Tamdhu 12", price: "£5.50" },
          { name: "Bowmore 12", price: "£5.20" },
          { name: "Talisker 10", price: "£6.50" },
          { name: "Arran 10", price: "£5.50" },
          { name: "Cotswold", price: "£5.20" },
          { name: "Nikka Days", price: "£4.90" },
          { name: "Maker's Mark", price: "£4.90" },
          { name: "Eagle Rare", price: "£5.20" },
        ],
      },
      {
        title: "Mixers",
        items: [
          { name: "Draught Cola, Diet Cola, Lemonade, OJ, Apple", price: "£1.50" },
          { name: "House Tonic Waters", price: "£1.90" },
          { name: "Fevertree Ginger Beer", price: "£2.50" },
        ],
      },
    ],
  },
  {
    id: "cocktails",
    kicker: "Long Drinks",
    title: "Cocktails & Spritz",
    intro: "We're not cocktail pros, but we like a good mix as much as the next person.",
    groups: [
      {
        title: "Long Drinks",
        items: [
          { name: "Aperol Spritz", price: "£9.50", desc: "Aperol, Prosecco, soda & orange." },
          { name: "Coconut Paloma", price: "£9.50", desc: "Coconut Tequila, El Jimador Blanco, grapefruit, lime, soda." },
          { name: "Raspberry Collins", price: "£10.50", desc: "50ml Raspberry gin, lemon syrup, raspberry purée, soda, lemon." },
          { name: "Pimm's Cup", price: "£8.90", desc: "Pimm's No.1, lemonade, strawberry, mint, cucumber, orange." },
          { name: "Hugo Spritz", price: "£9.50", desc: "St Germain elderflower, Prosecco, soda, mint & lemon." },
          { name: "Classic Bloody Mary", price: "£9.50", desc: "Double Stoli, tomato juice, lemon, Tabasco, vegan Worcester, celery." },
        ],
      },
    ],
  },
  {
    id: "wine",
    kicker: "Wine List",
    title: "By the Glass & Bottle",
    intro: "A 125ml measure is available on request, 50p off the 175ml price. All gluten-free. Enjoy 20% off a bottle when you spend £10 on food.",
    groups: [
      {
        title: "White (175ml / 250ml / Bottle)",
        items: [
          { name: "Castillo del Moro · Sauv Blanc · Spain", price: "£5.20 / £6.90 / £19.50", tags: ["vg"] },
          { name: "Mirabello · Pinot Grigio · Italy", price: "£5.40 / £7.20 / £20.50", tags: ["vg"] },
          { name: "Bellefontaine · Chardonnay · France", price: "£5.65 / £7.50 / £21.50" },
          { name: "Cloud Factory · Sauv Blanc · New Zealand", price: "£6.40 / £8.50 / £27.00" },
        ],
      },
      {
        title: "Red (175ml / 250ml / Bottle)",
        items: [
          { name: "Manoso · Rioja Joven · Spain", price: "£5.20 / £6.90 / £19.50", tags: ["vg"] },
          { name: "Otra Tierra · Merlot · Chile", price: "£5.40 / £7.20 / £20.50" },
          { name: "Bellefontaine · Cab Sauv · France", price: "£5.65 / £7.50 / £21.50" },
          { name: "Pablo Y Walter · Malbec · Argentina", price: "£6.40 / £8.50 / £27.00", tags: ["vg"] },
        ],
      },
      {
        title: "Rosé (175ml / 250ml / Bottle)",
        items: [
          { name: "Burlesque · Zinfandel · USA", price: "£5.40 / £7.20 / £20.50" },
          { name: "Cuvée Jean Paul · Tan/Cab/Mer · France", price: "£6.20 / £8.20 / £24.00", tags: ["vg"] },
        ],
      },
      {
        title: "Sparkling (125ml / Bottle)",
        items: [
          { name: "Le Dolci Colline · Prosecco · Italy", price: "£5.50 / £27.00", tags: ["vg"] },
        ],
      },
    ],
  },
  {
    id: "snacks",
    kicker: "Bar Snacks",
    title: "Crisps, Nuts & Nibbles",
    groups: [
      {
        title: "Snacks",
        items: [
          { name: "Pipers Crisps (Salted, Cheddar & Onion, Salt & Vinegar, Chorizo, Sweet Chilli)", price: "£1.90" },
          { name: "Black Country Pork Scratchings", price: "£2.50" },
          { name: "Salted & Roasted Peanuts", price: "£2.00" },
          { name: "Scampi Fries", price: "£1.90" },
          { name: "Bacon Fries", price: "£1.90" },
          { name: "Mini Cheddars", price: "£1.80" },
          { name: "Pick 'n' Mix Sweets", price: "£4.00", tags: ["ng", "vg"] },
        ],
      },
    ],
  },
];
