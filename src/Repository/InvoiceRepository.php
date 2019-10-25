<?php

namespace App\Repository;

use App\Entity\Invoice;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Invoice|null find($id, $lockMode = null, $lockVersion = null)
 * @method Invoice|null findOneBy(array $criteria, array $orderBy = null)
 * @method Invoice[]    findAll()
 * @method Invoice[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InvoiceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Invoice::class);
    }

    public function NbAdherents()
    {
        $query = $this->createQueryBuilder('i')
            ->select('i.year as Annee, SUM(i.amount) as Total, SUM(i.subscription) as Frais,COUNT(i.id) as NbAd, i.id ')
            ->groupBy('i.year')
            ->orderBy('i.year', 'DESC');
        return $query->getQuery()->getResult();
    }

    // public function totalInvoiceByAdherent()
    // {
    //     $query = $this->createQueryBuilder('i')
    //         ->select('i.year as Annee, i.id as invoiceId, c.id, c.lastName, SUM(i.amount) as Total')
    //         ->join('i.customer', 'c')
    //         ->groupBy('i.year', 'c.id')
    //         ->orderBy('Annee');
    //     return $query->getQuery()->getResult();
    // }

    public function totalInvoiceByAdherent()
    {
        $query = $this->createQueryBuilder('i')
            ->select('i.year as Annee, i.id as iId, c.lastName, c.firstName, c.email, c.phoneNumber, i.medicalCertificate, i.subscriptionType,
            i.amount, i.subscription, (i.amount + i.subscription) as Doit, i.insurance,
            (i.january + i.february + i.march + i.april + i.may + i.june + i.july + i.august + i.september + i.october + i.november + i.december) as Regle')
            ->join('i.customer', 'c')
            ->orderBy('Annee', 'DESC');
        return $query->getQuery()->getResult();
    }

    // /**
    //  * @return Invoice[] Returns an array of Invoice objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Invoice
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
