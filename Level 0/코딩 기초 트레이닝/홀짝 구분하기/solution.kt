fun main(args: Array<String>) {
    val n = readLine()!!.toInt()
    println("$n is ${if (n % 2 == 0) "even" else "odd"}")
}
