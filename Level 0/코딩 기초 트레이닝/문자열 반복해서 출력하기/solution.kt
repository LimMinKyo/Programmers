fun main(args: Array<String>) {
    val input = readLine()!!.split(' ')
    val str = input[0]
    val n = input[1].toInt()

    println(str.repeat(n))
}