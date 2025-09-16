class Telefon:
    def __init__(self, model, narx):
        self.model = model
        self.narx = narx

    def narxni_korsat(self):
        return f"{self.model} narxi: {self.narx} so'm"

# Test
tel = Telefon("iPhone 14", 12000000)
print(tel.narxni_korsat())  # iPhone 14 narxi: 12000000 so'm





