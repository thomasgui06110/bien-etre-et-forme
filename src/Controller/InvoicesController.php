<?php

namespace App\Controller;

use App\Repository\InvoiceRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class InvoicesController extends AbstractController
{
    /**
     * @Route(
     *  path="api/stats",
     *  name="factures_par_annee",
     *  methods={"GET"},
     *  defaults={
     *      "_controller"="\app\controller\InvoicesController::nbAdherentsAnnee",
     *      "_api_ressource_class"="App\Entity\Invoice",
     *      "_api_item_operation_name"="getnbAdherents"
     * }
     * )
     */
    // private $totalInvoice;
    // public function __construct()
    // {
    //     $this->totalInvoice = new ArrayCollection();
    // }
    public function nbAdherentsAnnee(InvoiceRepository $repo)
    {
        $nbAdherents = $repo->NbAdherents();
        return $this->json($nbAdherents);
    }

    /**
     * @Route(
     *  path="api/invoices/sum",
     *  name="montant_par_adherent",
     *  methods={"GET"},
     *  defaults={
     *      "_controller"="\app\controller\InvoicesController::nbAdherentsAnnee",
     *      "_api_ressource_class"="App\Entity\Invoice",
     *      "_api_item_operation_name"="totalInvoiceByAdherent"
     * }
     * )
     */
    public function totalInvoiceByAdherent(InvoiceRepository $repo)
    {
        $totalInvoice = $repo->totalInvoiceByAdherent();
        return $this->json(($totalInvoice));
    }
}
