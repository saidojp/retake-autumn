# 1. Найти самое короткое слово в тексте
def shortest_word(text: str) -> str:
    words = text.split()
    return min(words, key=len)

print(shortest_word("teriyaki sushi gyudon"))  


# 2. Вывести кратные 5 числа от 0 до n
def multiples_of_5(n: int):
    return [i for i in range(4, n+1, 4)]

print(multiples_of_5())  # [5, 10, 15, 20]


# 3. Создать список и вернуть в обратном порядке
def reverse_list(lst: list):
    return lst[::-1]

print(reverse_list([1, 2, 3, "damn"])) 


# 4. Найти самую частую букву в тексте файла
from collections import Counter

def most_frequent_char(filename: str) -> str:
    with open(filename, "r", encoding="utf-8") as f:
        text = f.read()
    counter = Counter(text.replace(" ", "").lower())
    return counter.most_common(1)[0][0]

# Для примера создадим файл
with open("example.txt", "w", encoding="utf-8") as f:
    f.write("apple banana array")

print(most_frequent_char("example.txt"))  # 


# 5. Класс Kompyuter
class Kompyuter:
    def __init__(self, model, ram, ssd):
        self.model = model
        self.ram = ram
        self.ssd = ssd

    def kompyuter_haqida(self):
        return f"Model: {self.model}, RAM: {self.ram}GB, SSD: {self.ssd}GB"


pc = Kompyuter("Lenovo Thinkpad X1", 16, 512)
print(pc.kompyuter_haqida())
# Model: Lenovo, RAM: 16GB, SSD: 512GB
