describe("Pizza Order Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5175/orderform");
  });
  it("should display the correct initial elements", () => {
    // Check if the pizza size options are visible
    cy.get("h3").contains("Boyut Seç").should("be.visible");
    cy.get("h3").contains("Hamur Seç").should("be.visible");
    cy.get("h3").contains("Ek malzemeler").should("be.visible");
    cy.get("h3").contains("İsim").should("be.visible");
    cy.get("h3").contains("Sipariş Notu").should("be.visible");
    cy.get("h3").contains("Sipariş Toplamı").should("be.visible");
  });

  it("should allow selecting a pizza size", () => {
    cy.get('input[type="radio"][value="Küçük"]').check().should("be.checked"); // Check the "Küçük" size
  });

  it("should allow selecting a dough type", () => {
    cy.get('select[name="hamur"]').select("İnce").should("have.value", "İnce");
  });

  it("should allow adding ingredients", () => {
    const malzemeler = "Mısır";
    cy.get(`input[value="${malzemeler}"]`).check();
    cy.get(`input[value="${malzemeler}"]`).should("be.checked");
  });

  it("should show error when name is less than 3 characters", () => {
    // İsmini 1 karakter olarak gir
    cy.get('input[placeholder="İsminizi Girin (En az 3 karakter)"]')
      .focus()
      .type("A")
      .blur();
  });

  it("should allow submitting a valid order", () => {
    // Set the pizza size and dough
    cy.get('input[type="radio"][value="Küçük"]').check();
    cy.get('select[name="hamur"]').select("İnce");

    // Select ingredients
    cy.get('input[value="Mısır"]').check();
    cy.get('input[value="Kabak"]').check();

    // Add order note
    cy.get("textarea").type("No mushrooms please.");

    // Submit the order
    cy.intercept("POST", "https://reqres.in/api/pizza").as("orderRequest");
    cy.get("button.buton").click();

    // Wait for the request and check the response
    cy.wait("@orderRequest").its("response.statusCode").should("eq", 201);

    // Check if we are redirected to the success page
    cy.url().should("include", "/ordersuccess");
  });

  it("should disable the decrease button when product quantity is 1", () => {
    cy.get("button").contains("-").should("be.disabled");
  });

  it("should increase product quantity", () => {
    cy.get("button").contains("+").click();
    cy.get(".urunSayisi span").should("contain", "2");
  });

  it("should decrease product quantity", () => {
    cy.get("button").contains("+").click(); // Increase first
    cy.get("button").contains("-").click(); // Then decrease
    cy.get(".urunSayisi span").should("contain", "1");
  });
});
