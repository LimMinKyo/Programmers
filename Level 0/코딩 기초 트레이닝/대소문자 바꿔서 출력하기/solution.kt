fun main(args: Array<String>) {
    val str = readLine()!!
    str.map { if (it.isLowerCase()) it.uppercase() else it.lowercase() } 
      .joinToString("")
      .also { println(it) }
}
