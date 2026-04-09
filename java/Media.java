public class Media {
    public static void main(String[] args) {
        // Notas do aluno
        double nota1 = 7.5, nota2 = 8.0, nota3 = 6.5;
        double media  = (nota1 + nota2 + nota3) / 3;

        System.out.printf("Média: %.2f%n", media);

        // Verificação de aprovação com if/else if
        if (media >= 7.0) {
            System.out.println("Situação: APROVADO ✔");
        } else if (media >= 5.0) {
            System.out.println("Situação: RECUPERAÇÃO ⚠");
        } else {
            System.out.println("Situação: REPROVADO ✗");
        }

        // Switch para conceito
        int conceito = (media >= 9) ? 1 : (media >= 7) ? 2 : (media >= 5) ? 3 : 4;
        switch (conceito) {
            case 1: System.out.println("Conceito A"); break;
            case 2: System.out.println("Conceito B"); break;
            case 3: System.out.println("Conceito C"); break;
            default: System.out.println("Conceito D");
        }
    }
}
