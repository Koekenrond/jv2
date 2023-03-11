A = 0
B = 0
uitkomst = 0

def on_button_pressed_a():
    global A
    basic.clear_screen()
    A += 1
    basic.show_number(A)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global B
    basic.clear_screen()
    B += 1
    basic.show_number(B)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    global uitkomst, A, B
    basic.clear_screen()
    uitkomst = A + B
    basic.show_number(uitkomst)
    A = 0
    B = 0
    uitkomst = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)
