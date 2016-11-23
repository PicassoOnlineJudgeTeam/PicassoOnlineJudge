a_var = 'global value'

def outer1():
	a_var = 'enclosed value'

	def inner1():
		a_var = 'local value'
		print(a_var)

		def inner2():
				a_var = 'local value2'
				print(a_var)

		inner2()
		outer2()
		outer3()

	inner1()

def outer2():
	a_var = 'enclosed value2'
	print(a_var)

def outer3():
	print(a_var) # global value

outer1()